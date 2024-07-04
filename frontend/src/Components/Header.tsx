import axios from "axios";

import { useAuth } from "../lib/UserContext";



export default function Header({ toggle, setSignUp, setSignIn }: any) {
  // @ts-ignore
  const {user ,setUser} = useAuth();
  const handleLogout = async () => {
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      ).then(()=>setUser(null))


    // await fetch("http://localhost:6969/auth/logout", { method: 'POST', credentials: 'same-origin' ,})
  };
  return (
    <>

      <header className="w-full h-20 shadow bg-slate-100">
        <nav className="flex w-10/12 m-auto  h-20 items-center justify-between ">
          <div className="logo text-3xl font-semibold">Todo app</div>
          <div className="flex gap-5 items-center">

            {user && (
              <>
                <div> Hello {user.name}</div>
                <div
                  className="btn "
                  onClick={() => {
                    toggle((prev: Boolean) => !prev);
                  }}
                >
                  AddPost
                </div>
                <div
                  className="btn "
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  logout
                </div>
              </>
            )}
            {!user && (
              <>
                <div
                  className="btn "
                    // @ts-ignore
                  onClick={()=>setSignIn((prev: Boolean) => prev=true)}
                >
                  Login In
                </div>
                <div
                  className="btn "
                    // @ts-ignore

                  onClick={()=>setSignUp((prev: Boolean) => prev = true)}
                >
                  Sign Up
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
