import React from 'react';
import "./App.css";
import Sidebar from './compponents/sidebar/Sidebar';
import Home from './compponents/home/Home';
import About from './compponents/about/About';
import Services from './compponents/services/Services';
import Resume from './compponents/resume/Resume';
import Portfolio from './compponents/portfolio/Portfolio';

const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
    </main>
    </>
  )
}

export default App
