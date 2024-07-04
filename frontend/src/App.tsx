import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Addpost from "./Components/Addpost";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/Signup";
import UserContext from "./lib/UserContext";

function App() {
  const [addpost, setAddpost] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <UserContext>
      <>
        {addpost && <Addpost toggle={setAddpost} />}
        <Header
          toggle={setAddpost}
          setSignIn={setSignIn}
          setSignUp={setSignUp}
        />
  
           
        {signUp && <SignUp signUp={setSignUp} />}
        { signIn && <SignIn signIn={setSignIn} />}
        {/* {(signUp&& !signIn) && <SignUp signUp={setSignUp} />} */}
        {/* {(!signUp&& signIn) && <SignIn signIn={setSignIn} />} */}

        <Home />
      </>
    </UserContext>
  );
}

export default App;
