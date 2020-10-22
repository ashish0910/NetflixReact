import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./GlobalStyles";
import App from "./App";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
