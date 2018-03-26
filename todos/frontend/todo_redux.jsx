import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
	window.store = configureStore();
	ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));
});
