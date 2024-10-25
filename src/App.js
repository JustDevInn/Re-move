import React from 'react';
// import router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
// import pages
import Nav from './components/NavBar';
import Home from './components/Home';
import Werkwijze from './components/Werkwijze';
import Informatie from './components/Informatie';
import Diensten from './components/Diensten';
import Voorwaarden from './components/Voorwaarden';
import Contact from './components/Contact';
import Footer from './components/Footers';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/werkwijze' element={<Werkwijze />}/>
        <Route path='/informatie' element={<Informatie />}/>
        <Route path='/diensten' element={<Diensten />}/>
        <Route path='/voorwaarden' element={<Voorwaarden />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
