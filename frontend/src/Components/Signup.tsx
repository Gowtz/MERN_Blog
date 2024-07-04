import { useState } from "react";
import axios from "axios";
import { useAuth } from "../lib/UserContext";

export default function SignUp({ signUp }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // @ts-ignore
  const {setUser} = useAuth();

  const handleSubmit = async () => {
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}auth/signup`,
      { name, email, password },
      {
        withCredentials: true,
      }
    ).then((data)=>setUser(data.data))
      // @ts-ignore

    signUp((prev: Boolean) => prev = false);
  };
  return (
    <>
      <div className="absolute  bg-slate-50 w-full h-full z-20 flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-slate-200 p-10 rounded flex flex-col min-h-[50vh] w-[600px] text-black"
        >
          <label className="text-2xl mb-2">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="py-3 px-5 rounded mb-5"
            type="email"
            placeholder="Email Here"
          />
          <label className="text-2xl mb-2">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="py-3 px-5 rounded mb-5"
            type="email"
            placeholder="Email Here"
          />
          <label className="text-2xl mb-2">password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="py-3 px-5 rounded mb-5"
            type="email"
            placeholder="Password Here"
          />
          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
            className="btn mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
