import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from "./context/index.tsx";
import { system } from "./theme.ts";
import "./global.css";
import './i18n'; // Import your i18n configuration

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={system}>
    <React.StrictMode>
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </React.StrictMode>
  </ChakraProvider>
);
