import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import StyleToggle from './components/styleToggle/StyleToggle';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Recommandations from './components/recommandations/Recommandations';
import Contact from './components/contact/Contact'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function App() {
  return (
    <>
      <Sidebar />
      <StyleToggle />
      <main className='main'>
        <Home />
        <About />
        <Portfolio />
        <Recommandations />
        <Contact />
      </main>
    </>
  );
}

export default App;
