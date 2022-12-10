import React from 'react';
import Home from "./pages/home/Home"
import NavBar from './components/navbar/NavBar';
import Write from './pages/write/Write';

function App() {
  return (
    <React.Fragment>    
      <NavBar />
      <Write />
    </React.Fragment>
  );
}

export default App;
