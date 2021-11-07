import React from "react";
import "../index.scss";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button className="btn btn-warning btn-logout" onClick={() => logout()}>
      logOut
    </button>
  );
};
export default LogoutButton;
