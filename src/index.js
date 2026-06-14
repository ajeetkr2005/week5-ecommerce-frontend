import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-ys61bkmjajnkuvxq.us.auth0.com"
    clientId="awKF1bTGztvAMi6hVFtMa7ArgMJj5khc"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </Auth0Provider>
);