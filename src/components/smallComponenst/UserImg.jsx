import { user } from "../../globalState";

export default function UserImg({ w, user }) {
  return (
    <img
      src={`https://ui-avatars.com/api?name=${user}&background=0D8ABC&color=fff&rounded=true`}
      alt={user}
      className={`${w} `}
    />
  );
}
