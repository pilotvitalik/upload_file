import { combineReducers } from 'redux';
import addFileReducer from './addFileSlice';

export const rootReducer = combineReducers({
	count: addFileReducer,
})