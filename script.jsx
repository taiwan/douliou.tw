import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import App from './app.jsx';
import Home from './home.jsx';
import Area from './area.jsx';

const routes = {
	path: '/',
	component: App,
	indexRoute: {component: Home},
	childRoutes: [
		{path: 'area', component: Area}
	]
};

(function() {
  ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));
})()
