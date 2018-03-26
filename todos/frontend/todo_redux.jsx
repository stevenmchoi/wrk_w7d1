import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import {receiveTodos, receiveTodo} from './actions/todo_actions';
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener('DOMContentLoaded', () => {
	window.store = configureStore();
	ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));
});
