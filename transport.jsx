import React, {Component} from 'react';
import {MarkerGroup, LineGroup} from 'react-d3-map';

export default class Transport extends Component {
	constructor(props) {
		super(props);
		this.state = {data: null};
	}
	componentDidMount() {
		fetch('/buses.json').then(function(response) {
			return response.json();
		}).then((buses) => {
			this.setState({data: buses});
		});
	}
	render() {
		const {data} = this.state;
		return data ? <g>
			<g className="route-101">
				<LineGroup
					data = {data['101'].line}
					popupContent = {(data) => data.properties.name}
					meshClass = "bus-line"
				/>
				<MarkerGroup
					data = {data['101'].stops}
					popupContent = {(data) => data.properties.name}
					markerClass = "bus-stop"
				/>
			</g>
			<g className="route-102">
				<LineGroup
					data = {data['102'].line}
					popupContent = {(data) => data.properties.name}
					meshClass = "bus-line"
				/>
				<MarkerGroup
					data = {data['102'].stops}
					popupContent = {(data) => data.properties.name}
					markerClass = "bus-stop"
				/>
			</g>
		</g> : null;
	}
}
