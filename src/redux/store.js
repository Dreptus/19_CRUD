import { legacy_createStore, combineReducers } from "redux";
import initialState from "./initialState";
import postsReducer from "./postsRedux";
// import categoriesReducer from "./categoriesRedux";

const subreducers = {
  posts: postsReducer,
//   categories: categoriesReducer,
};

const reducer = combineReducers(subreducers);
const store = legacy_createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
