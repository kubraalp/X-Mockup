import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import styled from "styled-components";
import SignUp from "./pages/SignUp";
import { useState } from "react";

const Container = styled.div`
  background-color: black;
  color: white;
`;

function App() {
  const [user, setUser] = useState(null);
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home user={user} />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
