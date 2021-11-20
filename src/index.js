import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import App from "./App";
import appReducer from "./reducers";
import { loadState, saveState } from "./helpers/localStorage";

const persistedState = loadState();
const store = createStore(
  appReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

render(<App store={store} />, document.getElementById("root"));
