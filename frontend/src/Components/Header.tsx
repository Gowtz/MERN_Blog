import axios from "axios";

import { useAuth } from "../lib/UserContext";



export default function Header({ toggle, setSignUp, setSignIn }: any) {
  const {user,setUser} = useAuth();
  const handleLogout = async () => {
    await axios
      .post(
        "http://localhost:6969/auth/logout",
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
                  onClick={()=>setSignIn((prev: Boolean) => true)}
                >
                  Login In
                </div>
                <div
                  className="btn "
                  onClick={()=>setSignUp((prev: Boolean) => true)}
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
