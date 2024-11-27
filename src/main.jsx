import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
