import { ADD_TASK, REMOVE_TASK, DONE_TASK, EDIT_TASK } from '../constants';

export function addTask(task) {
	return {
		type: ADD_TASK,
		payload: task,
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