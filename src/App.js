import React from 'react';
import Home from "./pages/home/Home"
import NavBar from './navbar/NavBar';

function App() {
  return (
    <React.Fragment>    
      <NavBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
