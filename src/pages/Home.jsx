import LateralNavBar from "../components/LateralNavBar";
import PostsWall from "../components/PostsWall";
import SearchInfo from "../components/SearchInfo";

export default function Home() {
  return (
    <div className=" flex">
      <LateralNavBar />
      <PostsWall />
      <SearchInfo />
    </div>
  );
}
