import { puntos, searchIcon } from "../asset/icons";
import { trendingTopics } from "../generalVarianbles";
import Trending from "./smallComponenst/Trending";

export default function SearchInfo() {
  return (
    <div className="w-6/12 h-full mx-8 hidden md:flex text-[rgb(232,234,235)]">
      <div className=" mx-auto">
        <div className=" flex items-center px-5 py-2 my-3 bg-[#1f2226] rounded-full space-x-3 ">
          {searchIcon}
          <input
            type="text"
            className=" bg-transparent w-full"
            placeholder="Search "
          />
        </div>
        <div className=" max-w-72  space-y-2">
          <span className=" font-bold text-xl">Subscribe to Premium</span>
          <p className=" font-semibold text-sm ">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className=" btn-color px-5 py-1.5 rounded-full font-bold">
            Subscribe
          </button>
        </div>
        <div className=" my-6 ">
          <span className=" font-bold text-xl">Spain trends</span>
          {trendingTopics.map((e) => (
            <Trending values={e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
