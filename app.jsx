import React, {Component} from 'react';
import {Map} from 'react-d3-map';
import Header from './header.jsx';

export default class App extends Component {
	render() {
	    var width = window.innerWidth;
	    var height = window.innerHeight;
	    var scale = 1 << 23;
	    var scaleExtent = [1 << 10, 1 << 25]
	    var center = [120.5411994, 23.708];
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
					{this.props.children}
				</Map>
			</main>
		</div>);
	}
}
