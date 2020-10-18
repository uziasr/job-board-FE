import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Scraper from './components/Scraper'
import JobBoard from './components/JobBoard'
import Auth from "./components/auth/Auth"
import Job from "./components/Job"
import JobAnalytics from "./components/JobAnalytics"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path={"/add-job"} component={Scraper}/>
          <Route exact path={"/"} component={JobBoard}/>
          <Route exact path={"/register"} component={Auth}/>
          <Route path={"/job/"} component={Job}/>
          <Route path={"/analytics"} component={JobAnalytics}/>
        </Switch>
        {/* <Scraper /> */}
        {/* <JobBoard /> */}

        {/* <Auth/> */}
      </header>
    </div>
  );
}

export default App;
