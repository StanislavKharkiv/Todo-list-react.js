import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { addTask } from '../../actions/actions';
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

const NewTodo = () => {
	const [form, setForm] = useState({});
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const changeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}
	const newTask = () => {
		dispatch(addTask({ ...form, id: Date.now(), isComplete: false }));
		history.push('/');
	}
	return (
		<div>
			<Grid container justify="center">
				<Grid item sm={10} md={6} lg={4} xl={4}>
				<Paper className={classes.paper}>
					<Typography variant="h4" component="h2" gutterBottom className={classes.header} >New Task</Typography>
					<form autoComplete="off" className="new_task_form">
						<TextField className={classes.input} onChange={changeInput} label="Task name" name="name" fullWidth />
						<TextField
							className={classes.input}
							onChange={changeInput}
							label="End of task"
							type="date"
							fullWidth
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
							fullWidth
						/>
						<Button variant="outlined" onClick={newTask} startIcon={<PostAddIcon />} size="large">add</Button>
					</form>
				</Paper>
				</Grid>
			</Grid>
		</div>
	)
};

export default NewTodo;