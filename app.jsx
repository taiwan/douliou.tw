import React, {Component} from 'react';
import {Map} from 'react-d3-map';

export default class App extends Component {
	render() {
		let map = document.getElementById('map');
	    let info = document.getElementById('info');
	    var width = map.offsetWidth;
	    var height = map.offsetHeight;
	    var scale = 1 << 23;
	    var scaleExtent = [1 << 10, 1 << 25]
	    var center = [120.5411994, 23.708];
	    var onAreaHover = function(dom, d, i) {
	      info.innerHTML = d.properties.village;
	    };
	    var onAreaOut = function(dom, d, i) {
	      info.innerHTML = '斗六市';
	    };
		return <Map
	      width= {width}
	      height= {height}
	      scale= {scale}
	      scaleExtent= {scaleExtent}
	      center= {center}
	      data= {this.props.data}
	      onPolygonMouseOut= {onAreaOut}
	      onPolygonMouseOver= {onAreaHover}
	    />;
	}
}
