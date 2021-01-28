import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../route/Auth";
import Home from "../route/Home";
import Profile from "../route/Profile";
import Navigation from "./navigation";


const Routin = ({isLoggedIn, userObj}) => {
  return (
  <Router>
    {isLoggedIn && <Navigation/>}
    <Switch>
      {isLoggedIn ? (
      <>
        <Route exact path="/">
          <Home userObj={userObj}/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
      </> ) : (
      <Route exact path="/">
        <Auth/>
      </Route> )
      }
    </Switch>
  </Router>)
}

export default Routin;
