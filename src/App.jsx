import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome/>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
