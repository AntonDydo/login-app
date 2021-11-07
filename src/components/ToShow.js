import React from "react";
import "../index.scss";
import { useAuth0 } from "@auth0/auth0-react";

const ToShow = () => {
  const { user } = useAuth0();

  if (user != undefined) {
    return (
      <div>
        <button
          className="btn btn-warning btn-bro"
          onClick={() => {
            if (user != undefined) {
              localStorage.setItem("userName", user.given_name);
              localStorage.setItem("lastMessage", "Bro!");
              localStorage.setItem(
                "totalBro",
                +localStorage.getItem("totalBro") + 1
              );
              localStorage.setItem(
                "currentTime",
                new Date().toLocaleTimeString()
              );
            }

            console.log(localStorage.getItem("totalBro"));
          }}
        >
          BRO!
        </button>
        <div
          className="last-message "
          onClick={() => {
            window.location.reload(false);
          }}
        >
          <div
            className="last-message-text"
            dangerouslySetInnerHTML={{
              __html: localStorage.getItem("lastMessage") + " ",
            }}
          ></div>
          <div className="send-by">
            Send by{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: localStorage.getItem("userName") + " ",
              }}
            ></span>
            at
            <span
              dangerouslySetInnerHTML={{
                __html: " " + localStorage.getItem("currentTime") + " ",
              }}
            ></span>
          </div>
        </div>
        <div>
          {" "}
          <button
            className="btn btn-warning btn-sis"
            onClick={() => {
              if (user != undefined) {
                localStorage.setItem("userName", user.given_name);
                localStorage.setItem("lastMessage", "Sis!");
                localStorage.setItem(
                  "totalSis",
                  +localStorage.getItem("totalSis") + 1
                );
                localStorage.setItem(
                  "currentTime",
                  new Date().toLocaleTimeString()
                );
              }

              console.log(localStorage.getItem("totalSis"));
            }}
          >
            SIS
          </button>
        </div>
      </div>
    );
  }
  return null;
};

export default ToShow;
