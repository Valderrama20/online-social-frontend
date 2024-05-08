import { user } from "../../common/globalState";

export default function UserImg({ url = null, size = 12, user }) {
  return url ? (
    <img
      src={url}
      alt=""
      className={`w-${size} h-${size} rounded-full object-cover`}
    />
  ) : (
    <img
      src={`https://ui-avatars.com/api?name=${user}&background=0D8ABC&color=fff&rounded=true&size=48`}
      alt={user}
      className={`w-${size} h-${size} `}
    />
  );
}
