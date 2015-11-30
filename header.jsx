import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
	render() {
		return <header>
			<h1><Link to="/">斗六門</Link></h1>
			<nav id="menu">
				<ul>
					<li><Link to="area">行政</Link></li>
					<li><Link to="culture">文教</Link></li>
				</ul>
			</nav>
		</header>;
	}
}
