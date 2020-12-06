import { ADD_TASK } from './constants';

const initialState = {
	tasks: [
		{
			id: 1,
			name: 'Create this app',
			date: '31/12/2020',
			description: 'I have to make this app in this year!'
		}
	]
}
export function rootReducer(state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case ADD_TASK : 
			return { ...state, tasks: state.tasks.concat([action.payload]) };
		default: 
			return state;
	}
}