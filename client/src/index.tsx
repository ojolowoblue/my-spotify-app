import * as React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { GlobalStyles as BaseStyles } from "twin.macro";

import GlobalStyles from "app/styles";
import QueryProvider from "app/providers/QueryProvider";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BaseStyles />
    <Global styles={GlobalStyles} />
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);

reportWebVitals();
