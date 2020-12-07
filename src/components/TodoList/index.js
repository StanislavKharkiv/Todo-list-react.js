import React from 'react';
import { removeTask } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Delete, EditOutlined} from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './todoList.css';

const useStyles = makeStyles({
	cardActions: {
		justifyContent: 'flex-end',
	},
	card: {
		width: '300px',
		margin: 10,
	}
})

const TodoList = () => {
	const classes = useStyles();
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	const deleteTask = (e) => {
		console.log(e.currentTarget.dataset.id)
		dispatch(removeTask(e.currentTarget.dataset.id));
	}
	console.log(tasks)
	return (
		<ul className="task_list" >
			{tasks.map((el) => (
				<Card key={el.id} className={classes.card}>
					<CardContent>
						<Typography variant="h5"  component="h4" color="primary">{el.name}</Typography>
						<div>{el.date || 'no date'}</div>
						<div>{el.description}</div>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button color="primary" size="small" variant="outlined" startIcon={<EditOutlined />}>Edit</Button>
						<Button
							onClick={deleteTask}
							data-id={el.id}
							variant="outlined"
							color="secondary"
							size="small"
							startIcon={<Delete />}
						>
							Delete
    			  </Button>
					</CardActions>
				</Card>
			))}
		</ul>
	)
};

export default TodoList;