import { combineReducers } from 'redux';
import tasks from './tasks';
import status from './status';

const rootReducer = combineReducers({tasks, status});

export default rootReducer;