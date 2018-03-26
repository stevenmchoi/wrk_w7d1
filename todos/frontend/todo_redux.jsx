import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {receiveTodos, receiveTodo} from './actions/todo_actions';
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();
	ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
