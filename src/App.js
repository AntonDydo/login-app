import React from "react";
import LoginButton from "./components/LoginBitton";
import ToShow from "./components/ToShow";
import LogoutButton from "./components/Logout";

function App() {
  return (
    <div>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>

      <ToShow></ToShow>

      <div className="total">
        {" "}
        <div>
          <div className="total-text">
            Total Bro:{" "}
            <span
              contentEditable="true"
              dangerouslySetInnerHTML={{
                __html: localStorage.getItem("totalBro"),
              }}
            ></span>
          </div>
        </div>
        <div>
          <div className="total-text">
            Total Sis:{" "}
            <span
              contentEditable="true"
              dangerouslySetInnerHTML={{
                __html: localStorage.getItem("totalSis"),
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
