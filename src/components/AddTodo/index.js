import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { PostAdd, CancelPresentation } from '@material-ui/icons';
import { addTask, editTask } from '../../actions/tasks';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './newTodo.css'

const useStyles = makeStyles({
	header: {
		textAlign: 'center',
		fontWeight: '300',
		color: '#555',
	},
	input: {
		marginBottom: 20,
	},
	paper: {
    padding: 40,
    textAlign: 'center',
    color: 'gray',
  },
});

const AddTodo = () => {
	const [form, setForm] = useState({name: '', date: '', description: ''});
	const [isEdit, setEdit] = useState(false)
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const tasks = useSelector(state => state.tasks)
	const appStatus = useSelector(state => state.status)
	const { state } = useLocation();

	const setAddTodoMode = (state) => {
		if (!!state) {
			const task = tasks.filter(task => task.id === +state.id);
			setEdit(true);
			setForm({...form, ...task[0]});
		}
	} 
	const changeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}
	const newTask = () => {
			dispatch(addTask({ ...form, id: Date.now(), isComplete: false }, history));
	}

	const fixTask = () => {
		dispatch(editTask({ ...form }));
		history.push('/');
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {setAddTodoMode(state)}, []);

	return (
		<div>
			{ appStatus.isLoad ? <div className="loader"><CircularProgress size={60} /></div> : null }
			<Grid container justify="center">
				<Grid item sm={10} md={6} lg={4} xl={4}>
				<Paper className={classes.paper}>
					<Typography variant="h4" component="h2" gutterBottom className={classes.header} >New Task</Typography>
					<form autoComplete="off" className="new_task_form">
						<TextField className={classes.input} onChange={changeInput} label="Task name" name="name" value={form.name} fullWidth />
						<TextField
							className={classes.input}
							onChange={changeInput}
							label="End of task"
							type="date"
							fullWidth
							value={form.date}
							InputLabelProps={{
								shrink: true,
							}}
							name="date"
						/>
						<TextField
							className={classes.input}
							onChange={changeInput}
							label="Task description"
							multiline
							rows={3}
							variant="outlined"
							name="description"
							value={form.description}
							fullWidth
						/>
						<div className="buttons-wrapper">
							<Button variant="outlined" color="secondary" onClick={() => {history.push('/')}} startIcon={<CancelPresentation />} size="large">Close</Button>
							<Button variant="outlined" color="primary" onClick={isEdit ? fixTask : newTask} startIcon={<PostAdd />} size="large">add</Button>
						</div>
					</form>
				</Paper>
				</Grid>
			</Grid>
		</div>
	)
};

export default AddTodo;