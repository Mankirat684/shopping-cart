import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Products from "./Products.jsx";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {routes}/>
  </StrictMode>
);
