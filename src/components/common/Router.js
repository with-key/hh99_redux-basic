import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/login";
import Todo from "../todo";
import Todos from "../todos";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/todos" component={Todos} exact />
      <Route path="/todos/:id" component={Todo} exact />
      <Route path="/login" component={Login} exact />
    </Switch>
  );
};

export default Router;
