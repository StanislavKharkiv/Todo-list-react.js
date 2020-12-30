import { ADD_TASK, REMOVE_TASK, DONE_TASK, EDIT_TASK, START_LOADING, END_LOADING } from '../constants';

export function addTask(task, history) {
	return (dispatch, store) => {
		dispatch({type: START_LOADING})
		const saveData = new Promise((resolve, reject) => {
			setTimeout(function () {
				console.log(store())
				dispatch({
					type: ADD_TASK,
					payload: task,
				})
				resolve()
			}, 2000)
		})
		 saveData
		 .then(() => localStorage.setItem('tasks', JSON.stringify(store().tasks)))
		 .then(() => dispatch({type: END_LOADING}))
		 .then(() => history.push('/'))
	}
}

export function editTask(task) {
	return {
		type: EDIT_TASK,
		payload: task,
	}
}

export function removeTask(task) {
	return {
		type: REMOVE_TASK,
		payload: task,
	}
}

export function doneTask(taskId) {
	return {
		type: DONE_TASK,
		payload: taskId,
	}
}