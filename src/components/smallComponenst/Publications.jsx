import { useEffect, useRef } from "react";
import Card from "../CardOfPublication";
import Loading from "./loading";
import autoAnimate from "@formkit/auto-animate";

export default function Publications({ posts, deletePost, loading = false }) {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent}>
      {!loading ? (
        posts?.map((e) => {
          return <Card publication={e} deletePost={deletePost} key={e._id} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
