import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import PrivateRoute from "./utils/PrivateRoute"
import Scraper from './components/Scraper'
import JobBoard from './components/JobBoard'
import Auth from "./components/auth/Auth"
import Job from "./components/Job"
import JobAnalytics from "./components/JobAnalytics"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route exact path={"/register"} component={Auth} />
          <PrivateRoute exact path={"/"} component={JobBoard} />
          <PrivateRoute exact path={"/add-job"} component={Scraper} />
          <PrivateRoute path={"/job/"} component={Job} />
          <PrivateRoute path={"/analytics"} component={JobAnalytics} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
