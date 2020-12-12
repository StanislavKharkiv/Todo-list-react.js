import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { removeTask, doneTask } from '../../actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Delete, EditOutlined, Done, Block, PostAddSharp } from '@material-ui/icons';
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
	const history = useHistory();


	const handleDeleteTask = (e) => {
		console.log(e.currentTarget.dataset.id)
		dispatch(removeTask(e.currentTarget.dataset.id));
	}
	const handleEdit = (e) => {
		history.push({
			pathname: '/add-task',
			search: `?edit`,
			state: { id: e.currentTarget.dataset.id }
		});
	}
	const handleDoneTask = (e) => dispatch(doneTask(e.currentTarget.dataset.id))

	return (
		<div className="main">
			<ul className="task_list" >
				{tasks.map((el) => (
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
				))}
			</ul>
			<Link to="add-task" >
				<IconButton size="medium" color="primary" aria-label="add task">
					<PostAddSharp />
				</IconButton>
			</Link>
		</div>
	)
};

export default TodoList;