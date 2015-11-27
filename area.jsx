import React, {Component} from 'react';
import {PolygonGroup} from 'react-d3-map';

let info = document.getElementById('info');
const onAreaHover = function(dom, d, i) {
	if (d.properties.village) info.innerHTML = d.properties.village;
};
const onAreaOut = function(dom, d, i) {
	info.innerHTML = '斗六市';
};

export default class Area extends Component {
	constructor(props) {
		super(props);
		this.state = {data: null};
	}
	componentDidMount() {
		fetch('/villages.json').then(function(response) {
			return response.json();
		}).then((villages) => {
			this.setState({data: villages});
		});
	}
	render() {
		const {data} = this.state;
		return data ? <PolygonGroup
			data= {data}
			onMouseOut= {onAreaOut}
			onMouseOver= {onAreaHover}
			polygonClass = "village"
		/> : null;
	}
}
