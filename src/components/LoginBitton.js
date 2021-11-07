import React from "react";
import "../index.scss";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div>
      <button
        className="btn btn-warning btn-login"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        LogIn
      </button>
    </div>
  );
};

export default LoginButton;
