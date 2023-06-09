import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./sass/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <App />
        </main>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
