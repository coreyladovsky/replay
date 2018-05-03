import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
export default () => {
  let store = createStore(reducers, applyMiddleware(ReduxThunk, logger));
  return store;
};
