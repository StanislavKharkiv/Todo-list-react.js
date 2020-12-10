import { ADD_TASK, REMOVE_TASK, DONE_TASK } from '../constants';

const initialState = [
		{
			id: 1,
			name: 'Create this app',
			date: '31/12/2020',
			description: 'I have to make this app in this year!',
			isComplete: false
		}
	]

export default function tasks(state = initialState, action) {
	console.log(state, action)
	switch (action.type) {
		case ADD_TASK : 
			return [ ...state, {...action.payload}];
		case REMOVE_TASK :
			return state.filter((el) => el.id !== +action.payload)
		case DONE_TASK :
			return state.map((task) => task.id === +action.payload ? {...task, isComplete: !task.isComplete} : task)
		default: 
			return state;
	}
}