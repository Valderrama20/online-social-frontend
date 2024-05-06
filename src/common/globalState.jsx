import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import useAxios from "../hooks/useAxios";

// elimina el usuario
// Guarda el token de acceso
// y al usuario en el local storage

export const user = create(
  persist(
    (set, get) => ({
      data: {},
      clearUser: () => {
        console.log("usuario eliminada");
        set({ user: {} });
        localStorage.removeItem("user-logged-in");
      },
      set: (user) => {
        set({ data: user });
      },
    }),
    {
      name: "user-logged-in",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state, error) => {
        if (error) {
          console.log("No se pudo traer los datos", error);
        } else if (state) {
          console.log("Se pudo obtener el usuario", state);
        }
      },
    }
  )
);

// trae todos los post de la api

export const getPosts = create((set, get) => ({
  postsArr: [],
  addPost: (post) => {
    set({ postsArr: [post, ...get().postsArr] });
  },
  loadData: async () => {
    try {
      const response = await axios.get(
        "https://online-back-6i1s.onrender.com/api/v1/post"
      );
      set({ postsArr: response.data.reverse() });
    } catch (error) {
      console.error("No se pudo traer los dados", error);
    }
  },
  deletePost: (id) => {
    let filter = get().postsArr.filter((e) => e._id !== id);
    set({ postsArr: filter });
  },
}));
