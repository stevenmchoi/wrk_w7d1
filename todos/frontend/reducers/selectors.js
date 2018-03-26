import React from 'react';

export const allTodos = ({todos}) => {
	return Object.keys(todos).map((id) => {
		return todos[id];
	});
};
