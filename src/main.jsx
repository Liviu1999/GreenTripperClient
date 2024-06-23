import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

//const clientIdGoogle = process.env.REACT_APP_AUTH_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="149093264841-dp2i3ari7svd0p9acsrnss0cshhg9bd5.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
