import React from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import LandingPage from "./LandingPage";

function App() {
  let history = useHistory();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
