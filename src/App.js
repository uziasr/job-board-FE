import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scraper from './components/Scraper'
import JobBoard from './components/JobBoard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Scraper />
        {/* <JobBoard /> */}
      </header>
    </div>
  );
}

export default App;
