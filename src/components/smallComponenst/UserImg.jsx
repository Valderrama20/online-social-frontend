import { user } from "../../common/globalState";

export default function UserImg({ url = null, size, user }) {
  return url ? (
    <img
      src={url}
      alt=""
      className={`w-${size} h-${size} rounded-full object-cover`}
    />
  ) : (
    <img
      src={`https://ui-avatars.com/api?name=${user}&background=0D8ABC&color=fff&rounded=true`}
      alt={user}
      className={`w-${size} h-${size} `}
    />
  );
}
