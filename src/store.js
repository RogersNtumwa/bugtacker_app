import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./reducers/auth";
import alertReducer from "./reducers/alert";
import {
  bugDetails,
  bugsList,
  createBugReducer,
  deleteBugReducer,
  editBugReducer,
} from "./reducers/bug";

const middleware = [thunk];

const initialState = {};

const reducer = combineReducers({
  auth: user,
  alert: alertReducer,
  bug: bugDetails,
  bugs: bugsList,
  addBug: createBugReducer,
  editBug: editBugReducer,
  deleteBug: deleteBugReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
