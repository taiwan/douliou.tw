import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'react-d3-map';

(function() {
  let map = document.getElementById('map');
  var width = map.offsetWidth;
  var height = map.offsetHeight;
  var scale = 1 << 23;
  var scaleExtent = [1 << 10, 1 << 25]
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
  , map
  )
})()