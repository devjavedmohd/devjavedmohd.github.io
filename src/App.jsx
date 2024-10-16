
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/navigation/nav.component.jsx';
import HomeComponent from './components/home.component.jsx';
import AboutComponent from './components/about.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import './assets/styles/styles.scss';

const App = () => {


  useEffect(() => {
    AOS.init();
    // Custom cursor functionality
    const cursorPointed = document.querySelector('.pointed');

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor); // Cleanup on unmount
    };
  }, []);




  return (
    <Router>
      <div className="App">
        <div className="pointed" />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
