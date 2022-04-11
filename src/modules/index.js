import todos from "./todos";
import todo from "./todo";
import loginReducer from "./login";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const rootReducer = combineReducers({
  todos,
  loginReducer,
  todo,
  router: connectRouter(history),
});

export { history };
export default rootReducer;
