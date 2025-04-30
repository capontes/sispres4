import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import "./index.css";
import PayView from "./ui/pages/PayView.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PayView />
  </StrictMode>
);
