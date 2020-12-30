import { ADD_TASK, REMOVE_TASK, DONE_TASK, EDIT_TASK } from '../constants';

let initialState;
if (!localStorage.getItem('tasks')) {
	console.log('local storage ampty')
	initialState = [
		{
			id: 1,
			name: 'Create this app',
			date: '2020-12-13',
			description: 'I have to make this app in this year!',
			isComplete: false
		}
	]
} else {
	console.log(JSON.parse(localStorage.getItem('tasks')))
	initialState = JSON.parse(localStorage.getItem('tasks'))
}

export default function tasks(state = initialState, action) {
	switch (action.type) {
		case ADD_TASK : 
			return [ ...state, {...action.payload}];
		case EDIT_TASK : 
			return state.map((task) => task.id === +action.payload.id ? {...task, ...action.payload} : task);
		case REMOVE_TASK :
			return state.filter((el) => el.id !== +action.payload)
		case DONE_TASK :
			return state.map((task) => task.id === +action.payload ? {...task, isComplete: !task.isComplete} : task)
		default: 
			return state;
	}
}