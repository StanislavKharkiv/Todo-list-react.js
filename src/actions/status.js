import { START_LOADING, END_LOADING } from '../constants';

export function startLoad() {
	return {
		type: START_LOADING
	}
}

export function endLoad() {
	return {
		type: END_LOADING
	}
}