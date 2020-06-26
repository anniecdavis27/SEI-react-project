import React from 'react';
import './App.scss';
import Header from './components/Header/Header'

//This is the default page -- the CIRRUS logo links back to it -- it displays the users closest air quality based on IP address and sets the routing for the app

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
