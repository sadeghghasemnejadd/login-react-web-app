import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/layout/header/header";
import "./sass/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <main>
        <App />
      </main>
    </Provider>
  </React.StrictMode>
);
