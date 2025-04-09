import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./App.css";
import "@fontsource/roboto";
import { Provider } from "react-redux";
import { store } from "./components/client-side/global-state/global-store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
