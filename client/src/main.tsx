import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import VentaView from "./ui/pages/VentaView.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VentaView />
  </StrictMode>
);
