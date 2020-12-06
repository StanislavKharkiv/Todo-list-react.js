import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/actions';
import './newTodo.css'

const useStyles = makeStyles({
	header: {
		textAlign: 'center',
		fontWeight: '300',
		color: '#333',
		textShadow: '1px 0 1px #555',
	},
	input: {
		marginBottom: 20,
	}
});

const NewTodo = () => {
	const [form, setForm] = useState({});
	const classes = useStyles();
	const dispatch = useDispatch();

	const changeInput = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
		console.log(form);
	}
	const newTask = () => {
			dispatch(addTask({ id: Date.now(), name: form.name, date: form.date, description: form.description}));
	}
	return (
		<div className="new_todo_wrap">
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
				<Button variant="outlined" onClick={newTask}>add</Button>
			</form>
		</div>
	)
};

export default NewTodo;