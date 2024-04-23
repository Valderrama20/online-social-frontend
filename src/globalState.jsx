import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Llama usuario por id
// elimina el usuario
// guarda el usuario en el local storage

export const getUser = create(
  persist(
    (set, get) => ({
      user: {},
      clearUser: () => {
        set({ user: {} });
        localStorage.removeItem("user-logged-in");
      },
      getUser: async (id) => {
        if (!get().user.fullName) {
          try {
            let user = await axios.get(
              `https://online-back-6i1s.onrender.com/api/v1/users/` + id
            );
            set({ user: user.data });
          } catch (error) {
            console.error("No se pudo traer el usuario", error);
          }
        }
      },
    }),
    {
      name: "user-logged-in",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state, error) => {
        if (error) {
          console.log("No se pudo trar los datos", error);
        } else if (state) {
          console.log("Se pudo obtener el usuario", state);
        }
      },
    }
  )
);

// trae todos los post de la api

export const getPosts = create((set) => ({
  postsArr: [],
  loadData: async () => {
    try {
      const response = await axios.get(
        "https://online-back-6i1s.onrender.com/api/v1/post"
      );
      set({ poastsArr: response.data });
    } catch (error) {
      console.error("No se pudo traer los dados", error);
    }
  },
}));
