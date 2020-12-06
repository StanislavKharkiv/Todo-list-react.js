import React from 'react';
import { removeTask } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import './todoList.css';

const TodoList = () => {
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	const deleteTask = (e) => {
		console.log(e.currentTarget.dataset.id)
		dispatch(removeTask(e.currentTarget.dataset.id));
	}
	console.log(tasks)
return (
	<ul>
		{tasks.map((el) => (
			<li key={el.id} >
				<div>{el.name}</div>
				<div>{el.date}</div>
				<div>{el.description}</div>
				<Button
				onClick={deleteTask}
				data-id={el.id}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
			</li>
		))}
	</ul>
)};

export default TodoList;