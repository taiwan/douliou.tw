import React, {Component} from 'react';
import {Map} from 'react-d3-map';
import Header from './header.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {info: '斗六市'};
		this.setInfo = this.setInfo.bind(this);
	}
	setInfo(info) {
		this.setState({info});
	}
	render() {
	    var width = window.innerWidth;
	    var height = window.innerHeight;
	    var scale = 1 << 23;
	    var scaleExtent = [1 << 10, 1 << 25]
	    var center = [120.5411994, 23.708];
		const {info} = this.state;
		return (<div>
			<Header />
			<main>
				<Map
					width= {width}
					height= {height}
					scale= {scale}
					scaleExtent= {scaleExtent}
					center= {center}
				>
					{React.cloneElement(this.props.children, {setInfo: this.setInfo})}
				</Map>
				<span id="info">{info}</span>
			</main>
		</div>);
	}
}
