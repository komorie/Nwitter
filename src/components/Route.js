import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../route/Auth";
import Home from "../route/Home";
import Profile from "../route/Profile";
import Navigation from "./navigation";


const Routin = ({isLoggedIn}) => {
  return (
  <Router>
    {isLoggedIn && <Navigation/>}
    <Switch>
      {isLoggedIn ? (
      <>
        <Route exact path="/">
          <Home/>
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
