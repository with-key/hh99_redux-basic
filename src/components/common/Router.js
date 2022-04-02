import { Switch, Redirect, Route } from "react-router-dom";
import Todo from "../todo";
import Todos from "../todos";

const Router = () => {
  return (
    <Switch>
      <Route path="/todos" component={Todos} exact />
      <Route path="/todos/:id" component={Todo} exact />
    </Switch>
  );
};

export default Router;
