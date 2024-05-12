import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { casinoReducer } from "./casinoReducer.tsx";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const store = configureStore(
  {
    reducer: { casinoReducer },
  },
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#c2c2c2",
    },
    secondary: {
      main: "#da61bf",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
