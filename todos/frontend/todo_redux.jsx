import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {allTodos} from './reducers/selectors';

import {receiveTodos, receiveTodo} from './actions/todo_actions';
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener('DOMContentLoaded', () => {
	window.store = configureStore();
	window.allTodos = allTodos;
	ReactDOM.render(
		<Root store={window.store} />,
		document.getElementById('content')
	);
});
