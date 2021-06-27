import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Auth0Provider
        domain="dev-sscojs5p.us.auth0.com"
        clientId="zBTP9waUmLFPKTuNk5zoQwzai8c5vpxq"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
