import React from 'react';
import clsx from 'clsx';
import { removeTask, doneTask } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Delete, EditOutlined, Done, Block } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './todoList.css';

const useStyles = makeStyles(({ palette }) => {
	return {
		cardActions: {
			justifyContent: 'center',
		},
		card: {
			width: '310px',
			margin: 10,
		},
		button: {
			color: palette.success.main,
			borderColor: palette.success.main
		},
		completeTask: {
			border: '1px solid ' + palette.success.main,
		}
	}
})

const TodoList = () => {
	const classes = useStyles();
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();

	const handleDeleteTask = (e) => {
		console.log(e.currentTarget.dataset.id)
		dispatch(removeTask(e.currentTarget.dataset.id));
	}
	const handleDoneTask = (e) => dispatch(doneTask(e.currentTarget.dataset.id))

	console.log(tasks)
	return (
		<ul className="task_list" >
			{tasks.map((el) => (
				<Card key={el.id} className={el.isComplete ? clsx(classes.card, classes.completeTask) : classes.card}>
					<CardContent>
						<Typography variant="h5" component="h4" color="primary">{el.name}</Typography>
						<div>{el.date || 'no date'}</div>
						<div>{el.description}</div>
					</CardContent>
					<CardActions className={classes.cardActions}>
			<Button onClick={handleDoneTask} size="small" data-id={el.id} className={el.isComplete ? null : classes.button} variant="outlined" startIcon={el.isComplete ? <Block/> : <Done />}>{el.isComplete ? 'not Done' : 'done'}</Button>
						<Button color="primary" data-id={el.id}  size="small" variant="outlined" startIcon={<EditOutlined />}>Edit</Button>
						<Button onClick={handleDeleteTask} data-id={el.id} variant="outlined" color="secondary" size="small" startIcon={<Delete />}>Delete</Button>
					</CardActions>
				</Card>
			))}
		</ul>
	)
};

export default TodoList;