
import React, { useEffect } from "react";
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
  }, [])

  return (
    <Router>
      <div>
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
