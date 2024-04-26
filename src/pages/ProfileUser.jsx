import { user } from "../globalState";

export default function ProfileUser() {
  let { data } = user();

  if (!data.user._id)
    return (
      <div className="text-white">tienes que loguearte o crear un usuario</div>
    );

  return <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>;
}
