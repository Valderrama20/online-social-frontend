import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="flex w-full h-[200px] justify-center items-center">
      <ReactLoading type="spin" color="blue" height={"25px"} width={"25px"} />
    </div>
  );
}
