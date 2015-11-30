import React, {Component} from 'react';
import {MarkerGroup} from 'react-d3-map';

export default class Culture extends Component {
	constructor(props) {
		super(props);
		this.state = {data: null};
	}
	componentDidMount() {
		fetch('/schools.json').then(function(response) {
			return response.json();
		}).then((schools) => {
			this.setState({data: schools});
		});
	}
	render() {
		const {data} = this.state;
		return data ? <MarkerGroup
			data = {data}
			popupContent = {(data) => data.properties.name}
			markerClass = "school"
		/> : null;
	}
}
