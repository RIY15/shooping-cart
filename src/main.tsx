import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CardProvider";
import { ProductsProvider } from "./context/ProductProviders";
import { BrowserRouter } from "react-router-dom";
import { OrderHistoryProvider } from "./context/OrderHistoryProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <OrderHistoryProvider>
            <App />
          </OrderHistoryProvider>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
