import { puntos } from "../../asset/icons";

export default function Trending({ values }) {
  return (
    <div className=" flex flex-col my-4 text-[#71767a] hover:bg-[#1f2226] transition-colors cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold ">
          {values.id} · {values.category?.join(" · ")}
        </span>
        <div className=" h-7 w-7">{puntos}</div>
      </div>

      <span className=" font-bold text-white">{values.name}</span>
      <span className="text-sm font-semibold">{values.posts} posts</span>
    </div>
  );
}
