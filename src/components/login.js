import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({ redirectUri }) => {
  const { loginWithRedirect } = useAuth0();
  console.log(redirectUri);
  return (
    <button onClick={() => loginWithRedirect({ redirectUri: redirectUri })}>
      Log In
    </button>
  );
};

export default Login;
