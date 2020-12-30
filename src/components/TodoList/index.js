import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { PostAddSharp } from '@material-ui/icons';
import TodoItem from '../TodoItem';
import Header from '../Header'

import './todoList.css';

const TodoList = () => {
	const state = useSelector(state => state);
	const {tasks} = state;
	console.log(state)
	return (
		<>
		<Header />
		<div className="main">
			<Link to="add-task" >
				<IconButton size="medium" color="primary" aria-label="add task">
					<PostAddSharp />
				</IconButton>
			</Link>
			<ul className="task_list" >
				{tasks.map(el => <li key={el.id}><TodoItem el={el} /></li>)}
			</ul>
		</div>
		</>
	)
};

export default TodoList;