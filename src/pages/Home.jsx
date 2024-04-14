import LateralNavBar from "../components/LateralNavBar";
import PostsWall from "../components/PostsWall";

export default function Home() {
  return (
    <div className=" flex">
      <LateralNavBar />
      <PostsWall />
    </div>
  );
}
