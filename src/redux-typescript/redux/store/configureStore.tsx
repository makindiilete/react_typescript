import { compose, createStore } from "redux";
import { noteReducer } from "../reducers/noteReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(noteReducer, composeEnhancers());
};

export default configureStore;
