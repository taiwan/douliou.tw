import React, {Component} from 'react';
import {PolygonGroup} from 'react-d3-map';

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
		const {setInfo} = this.props;
		return data ? <PolygonGroup
			data= {data}
			onMouseOut= {() => setInfo('斗六市')}
			onMouseOver= {(dom, d, i) => d.properties.village ? setInfo(d.properties.village) : null}
			polygonClass = "village"
		/> : null;
	}
}
