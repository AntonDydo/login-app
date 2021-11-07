import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Auth0Provider
    domain="dev-j4fnorn0.us.auth0.com"
    clientId="Q7Ng5w8sx8ggWivawF2HkefdDzSOXmZy"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);
