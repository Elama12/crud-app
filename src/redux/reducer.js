import { FETCH_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actionTypes';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case UPDATE_TASK:
      return state.map(task => (task.id === action.payload.id ? action.payload : task));
    default:
      return state;
  }
};

export default taskReducer;
