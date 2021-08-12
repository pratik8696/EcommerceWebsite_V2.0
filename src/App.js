import React from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Screens/Login";
import Signup from "./components/Screens/Signup";
import Profile from "./components/Screens/Profile";
import LandingPage from "./components/Screens/LandingPage";
import Productscreen from "./components/Screens/Productscreen";


function App() {
  let history = useHistory();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/login">
          <Signup />
        </Route>

        <Route path="/signup">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/product/:id" render={(props) => <Productscreen {...props} />} />

      </Switch>
    </Router>
  );
}

export default App;
