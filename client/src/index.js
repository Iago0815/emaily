import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

//sendgrid
//echo "export SENDGRID_API_KEY='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'" > sendgrid.env
//echo "sendgrid.env" >> .gitignore
//source ./sendgrid.env
