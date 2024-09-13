import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-kyeeqomevqfhgxjg.us.auth0.com"
    clientId="6tCENOWMmikeAjH3QWlK2L6Gw3aTCYO0"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StrictMode>
      <BrowserRouter>
        <CoinContextProvider>
          <App />
        </CoinContextProvider>
      </BrowserRouter>
    </StrictMode>
  </Auth0Provider>,
);
