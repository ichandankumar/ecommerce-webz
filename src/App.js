import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import Store from './components/StoreElements';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Store/>
  
      {/* Add your content for each page here */}
    </div>
  );
}

export default App;