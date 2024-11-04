import { createStore, applyMiddleware, combineReducers } from 'redux';
import  {thunk } from 'redux-thunk';
import taskReducer from './reducer';

const rootReducer = combineReducers({
  tasks: taskReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
