
import './style/index.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogue from './components/Catalogue';

import Detail from './components/Detail';
import NotFound from './components/NotFound';
import New from './components/New';

function App() {
  

  return (
    <Router basename='/video-game-catalogue' className='flex-wrapper'>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Catalogue />} />
        <Route path="/item/:id" element={<Detail games={[]} />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </Router>
  );
}

export default App;
