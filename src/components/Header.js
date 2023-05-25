
import React, { useState } from 'react';
import New from './New';

function Header({ title }) {
  const [showForm, setShowForm] = useState(false);

  const handleAddGame = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <header>
      <div className="container flexbox">
        <h1>{title}</h1>
        <div className="inline">
          <button onClick={handleAddGame}>Add Game</button>
        </div>
      </div>
      {showForm && (
        <div className="overlay">
          <div className="dialog">
            <button className="close" onClick={handleCloseForm}>
              <p className='x'>&times;</p>
            </button>
            <New />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;