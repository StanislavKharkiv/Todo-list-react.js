import React from 'react';
import { useSelector } from 'react-redux';
import './todoList.css';

const TodoList = () => {
	const tasks = useSelector(state => state.tasks);
	console.log(tasks)
return (
	<ul>
		{tasks.map((el) => (
			<li key={el.id}>
				<div>{el.name}</div>
				<div>{el.date}</div>
				<div>{el.description}</div>
			</li>
		))}
	</ul>
)};

export default TodoList;