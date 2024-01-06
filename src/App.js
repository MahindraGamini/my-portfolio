import React from 'react';
import Navbar from './Components/Navbar/navbar.js';
import Intro from './intro/intro.js';
import Skills from './Components/skills/skills.js';
import Work from './Components/Works/works.js';
import Contacte from './Components/Contact/contact.js';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Intro/>
        <Skills/>
        <Work/>
        <Contacte/>
        
      
    </div>
  );
}

export default App;
