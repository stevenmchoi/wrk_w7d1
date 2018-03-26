import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => (
	<div>
		<h3>Todo List goes here!</h3>
    <ul>
      {todos.map((todo) => <TodoListItem todo={todo} key={todo.id}/>)}
    </ul>
	</div>
);

export default TodoList;
