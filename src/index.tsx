import React from "react";
import ReactDOM from "react-dom";
import {toast, ToastContainer, Zoom} from "react-toastify";

import AppRoute from "./routers/AppRoute";
import "react-toastify/dist/ReactToastify.css";
import "./styles/main.css";
import "./styles/global.css";

ReactDOM.render(
  <>
    <ToastContainer
      autoClose={5000}
      limit={4}
      closeOnClick={false}
      position={toast.POSITION.BOTTOM_CENTER}
      transition={Zoom}
    />
    <AppRoute/>
  </>,
  document.getElementById("root")
);
