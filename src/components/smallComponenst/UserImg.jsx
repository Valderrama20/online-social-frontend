export default function UserImg({ url = null, size = "w-12 h-12", user }) {
  return url ? (
    <img src={url} alt="" className={` ${size} rounded-full object-containx`} />
  ) : (
    <img
      src={`https://ui-avatars.com/api?name=${user}&background=0D8ABC&color=fff&rounded=true&size=48`}
      alt={user}
      className={`w-${size} h-${size} `}
    />
  );
}
