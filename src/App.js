import React from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Screens/Login";
import Signup from "./components/Screens/Signup";
import Profile from "./components/Screens/Profile";
import LandingPage from "./components/Screens/LandingPage";
import Productscreen from "./components/Screens/Productscreen";
import {AuthProvider} from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return ( 
    <Router>
      <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={LandingPage}  />
          
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/product/:id" render={(props) => <Productscreen {...props} />} />

      </Switch>
    </AuthProvider>
    </Router>
  );
}

export default App;
