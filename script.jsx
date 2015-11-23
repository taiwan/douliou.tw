import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'react-d3-map';

(function() {
  var width = 1000;
  var height = 800;
  var scale = 1 << 12;
  var scaleExtent = [1 << 10, 1 << 14]
  var center = [120.5411994, 23.708];
  // your polygon data
  var data = require('./area.json');

  ReactDOM.render(
    <Map
      width= {width}
      height= {height}
      scale= {scale}
      scaleExtent= {scaleExtent}
      center= {center}
      data= {data}
    />
  , document.getElementById('map')
  )
  console.log('test');
})()