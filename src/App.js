import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scraper from './components/Scraper'
import JobBoard from './components/JobBoard'
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Scraper /> */}
        {/* <JobBoard /> */}
        <Login/>
      </header>
    </div>
  );
}

export default App;
