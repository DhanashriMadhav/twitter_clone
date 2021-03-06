import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/auth/login";
import Home from "./components/Home/home";
import Signup from "./components/auth/signup";
import Reset from "./components/auth/Rest"
import Comment from "./container/comment";
import Profile from "./components/profile/Profile"
import Newpassword from "./components/auth/Newpassword";
import Userprofile from "./components/profile/useprofile"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/forget-password">
            <Reset />
          </Route>
          <Route exact path="/comment/:id">
            <Comment />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/userprofile">
            <Userprofile />
          </Route>
          <Route exact path="/:token">
            <Newpassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;