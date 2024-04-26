import { user } from "../globalState";

export default function ProfileUser() {
  let { data } = user();

  if (!data.user._id)
    return (
      <div className="text-white">tienes que loguearte o crear un usuario</div>
    );

  return (
    <div>
      <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
      <div class="relative bg-red-50">
        <input
          type="text"
          id="miInput"
          class="focus:translate-x-4 focus:translate-y-4"
        />
        <span
          id="miSpan"
          class="absolute top-0 left-0 transition-transform duration-500"
        >
          Texto de ejemplo
        </span>
      </div>
    </div>
  );
}
