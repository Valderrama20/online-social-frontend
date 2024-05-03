export default function ({ createUser, userInfo, changeInput }) {
  return (
    <form className=" flex flex-col sm:px-16 space-y-2 " onSubmit={createUser}>
      <input
        type="text"
        name="username"
        value={userInfo.username}
        className=" bg-transparent border h-14 borderColor rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
        onChange={changeInput}
        placeholder="@userName"
        required
      />

      <input
        type="password"
        name="password"
        value={userInfo.password}
        className=" bg-transparent border h-14 borderColor rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
        onChange={changeInput}
        placeholder="Contraseña"
        required
      />
      <input
        type="submit"
        className="bg-white  text-black font-bold text-lg h-14 rounded-full cursor-pointer "
      />
    </form>
  );
}
