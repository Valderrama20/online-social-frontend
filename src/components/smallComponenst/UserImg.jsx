export default function UserImg({ user, h }) {
  return (
    <img
      src={`https://ui-avatars.com/api?name=${user}&background=0D8ABC&color=fff`}
      alt={user}
      className={` rounded-full ${h} `}
    />
  );
}
