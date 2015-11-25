import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

(function() {
  var area = require('./area.json');
  ReactDOM.render(<App data={area} />, document.getElementById('map'));
})()
