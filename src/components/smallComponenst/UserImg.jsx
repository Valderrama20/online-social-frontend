import { user } from "../../globalState";

export default function UserImg({ w }) {
  let { data } = user();

  return (
    <img
      src={`https://ui-avatars.com/api?name=${data.user.fullName}&background=0D8ABC&color=fff&rounded=true`}
      alt={user}
      className={`${w} `}
    />
  );
}
