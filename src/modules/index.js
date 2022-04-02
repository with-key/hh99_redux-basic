import todos from "./todos";
import todo from "./todo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos,
  todo,
});

export default rootReducer;
