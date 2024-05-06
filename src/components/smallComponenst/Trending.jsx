import { puntos } from "../../asset/icons";

export default function Trending({ values }) {
  return (
    <div className=" flex flex-col my-4  hover:bg-[#1f2226] transition-colors cursor-pointer">
      <div className="flex items-center justify-between -mb-2 ">
        <span className="text-sm  text-[#71767a] ">
          {values.id} · {values.category?.join(" · ")}
        </span>
        <div className=" h-7 w-7">{puntos}</div>
      </div>

      <span className=" font-bold text-white">{values.name}</span>
      <span className="text-sm font-semibold textGray">
        {values.posts} posts
      </span>
    </div>
  );
}
