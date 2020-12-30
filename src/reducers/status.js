import { START_LOADING, END_LOADING } from '../constants';

const initialState = {
	isLoad: false,
}

export default function status(state = initialState, action) {
	switch (action.type) {
		case START_LOADING:
			return {...state, isLoad: true}
		case END_LOADING:
			return {...state, isLoad: false}
		default:
			return state
	}
}