import React from 'react';
import profile from './images/profile.jpg';
import './App.css';
import SocialLinks from './components/socialLinks'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="Profile Picture" />
        <h1>
          I'm Matt Allinder.
        </h1>
        <p>I'm a software development manager based in Minnesota.</p>
        <SocialLinks/>
      </header>
    </div>
  );
}

export default App;
