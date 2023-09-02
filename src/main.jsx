import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import RouteList from "./routes.jsx";
import "./style.css";
import "./utils/iconPack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouteList />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
// test PR
