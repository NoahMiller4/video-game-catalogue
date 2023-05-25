
import React from 'react';

function New() {
  return (
    <div className="new-form">
      <h2>Add Game</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" />

        <label htmlFor="year">Year:</label>
        <input type="text" id="year" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" />

        <label htmlFor="tags">Tags:</label>
        <input type="text" id="tags" />

        <label htmlFor="url">URL:</label>
        <input type="text" id="url" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default New;
