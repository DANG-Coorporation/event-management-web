import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { theme } from "./data/theme/theme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style.css";
import "./utils/iconPack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
// test PR
