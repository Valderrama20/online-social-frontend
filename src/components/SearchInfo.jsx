import { puntos, searchIcon } from "../asset/icons";
import { trendingTopics } from "../common/generalVarianbles";
import Trending from "./smallComponenst/Trending";

export default function SearchInfo() {
  return (
    <div className="w-full max-w-[200px] md:max-w-[250px]  lg:max-w-[350px] h-full mx-8 hidden lg:flex text-[rgb(232,234,235)] cursor-not-allowed">
      <div className=" mx-auto">
        <div className=" flex items-center px-5 py-2 my-3 bg-[#1f2226] rounded-full space-x-3 ">
          {searchIcon}
          <input
            type="text"
            className=" bg-transparent w-full"
            placeholder="Search "
          />
        </div>
        <div className=" w-full borderColor rounded-2xl px-4 py-3 border  space-y-2">
          <span className=" font-bold text-xl text-white">
            Subscribe to Premium
          </span>
          <p className=" font-semibold text-sm ">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className=" btn-color px-5 py-1.5 rounded-full font-bold cursor-not-allowed">
            Subscribe
          </button>
        </div>
        <div className=" my-6 border borderColor rounded-2xl px-4 py-3 ">
          <span className=" font-bold text-xl text-white">Spain trends</span>
          {trendingTopics.map((e) => (
            <Trending values={e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
