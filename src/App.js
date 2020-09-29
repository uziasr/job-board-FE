import React from 'react';
import './App.css';
import Scraper from './components/Scraper'
import JobBoard from './components/JobBoard'
import Auth from "./components/auth/Auth"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Scraper /> */}
        <JobBoard />

        {/* <Auth/> */}
      </header>
    </div>
  );
}

export default App;
