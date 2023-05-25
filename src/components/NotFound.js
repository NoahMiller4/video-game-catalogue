
import React from 'react';
import { FaGamepad } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="content">
        <FaGamepad className="spinner" />
        <h1>No Games Here!</h1>
      </div>
    </div>
  );
}

export default NotFound;