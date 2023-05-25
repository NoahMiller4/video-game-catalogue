
import './style/index.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import New from './components/New';

function App() {
  let title = 'Steam Catalogue';
  let linkName = 'Add Game';

  return (
    <Router basename='/video-game-catalogue' className='flex-wrapper'>
      <Header title={title} linkName={linkName} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Catalogue />} />
        <Route path="/item/:id" element={<Detail games={[]} />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
