import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import TanQueryProvider from "./provider/TanQueryProvider.tsx";
import Router from "./routes/Route.tsx";
import ContextProvider from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanQueryProvider>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </TanQueryProvider>
  </React.StrictMode>
);
