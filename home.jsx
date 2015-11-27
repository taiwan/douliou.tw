import React, {Component} from 'react';
import {PolygonGroup} from 'react-d3-map';

var area = require('./area.json');

export default class Home extends Component {
	render() {
		return <PolygonGroup
			data= {area}
			polygonClass = "boundry"
		/>;
	}
}
