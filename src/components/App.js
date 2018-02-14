import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;