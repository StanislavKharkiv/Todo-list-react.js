import React from 'react';
import { removeTask, doneTask } from '../../actions/tasks';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Delete, EditOutlined, Done, Block } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './todoItem.css';

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

const TodoItem = ({el}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleDeleteTask = (e) => dispatch(removeTask(e.currentTarget.dataset.id));
	
	const handleEdit = (e) => {
		history.push({
			pathname: '/add-task',
			search: `?edit`,
			state: { id: e.currentTarget.dataset.id }
		});
	}
	const handleDoneTask = (e) => dispatch(doneTask(e.currentTarget.dataset.id));

	return (
	<Card key={el.id} className={el.isComplete ? clsx(classes.card, classes.completeTask) : classes.card}>
		<CardContent>
			<Typography variant="h5" component="h4" color="primary">{el.name}</Typography>
			<div>{el.date || 'no date'}</div>
			<div>{el.description}</div>
		</CardContent>
		<CardActions className={classes.cardActions}>
			<Button onClick={handleDoneTask} size="small" data-id={el.id} className={el.isComplete ? null : classes.button} variant="outlined" startIcon={el.isComplete ? <Block /> : <Done />}>{el.isComplete ? 'not Done' : 'done'}</Button>
			<Button onClick={handleEdit} color="primary" data-id={el.id} size="small" variant="outlined" startIcon={<EditOutlined />}>Edit</Button>
			<Button onClick={handleDeleteTask} data-id={el.id} variant="outlined" color="secondary" size="small" startIcon={<Delete />}>Delete</Button>
		</CardActions>
	</Card>
	)}

export default TodoItem;