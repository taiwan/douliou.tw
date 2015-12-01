import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import App from './app.jsx';
import Home from './home.jsx';
import Area from './area.jsx';
import Culture from './culture.jsx';
import Transport from './transport.jsx';

const routes = {
	path: '/',
	component: App,
	indexRoute: {component: Home},
	childRoutes: [
		{path: 'area', component: Area},
		{path: 'culture', component: Culture},
		{path: 'transport', component: Transport}
	]
};

(function() {
  ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));
})()
