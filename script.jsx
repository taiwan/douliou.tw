import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'react-d3-map';

(function() {
  let map = document.getElementById('map');
  let info = document.getElementById('info');
  var width = map.offsetWidth;
  var height = map.offsetHeight;
  var scale = 1 << 23;
  var scaleExtent = [1 << 10, 1 << 25]
  var center = [120.5411994, 23.708];
  // your polygon data
  var data = require('./area.json');
  var onAreaHover = function(dom, d, i) {
    info.innerHTML = d.properties.VILLAGE;
  };
  var onAreaOut = function(dom, d, i) {
    info.innerHTML = '斗六市';
  };
  ReactDOM.render(
    <Map
      width= {width}
      height= {height}
      scale= {scale}
      scaleExtent= {scaleExtent}
      center= {center}
      data= {data}
      onPolygonMouseOut= {onAreaOut}
      onPolygonMouseOver= {onAreaHover}
    />
  , map
  )
})()
