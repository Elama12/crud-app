import axios from 'axios';
import { FETCH_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actionTypes';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch tasks
export const fetchTasks = () => async dispatch => {
  const response = await axios.get(API_URL);
  const tasks = response.data.map(task => ({
    ...task,
    timestamp: new Date(task.id).getTime() 
  }));
  dispatch({ type: FETCH_TASKS, payload: tasks });
};

// Add a new task
export const addTask = title => async dispatch => {
  const response = await axios.post(API_URL, { title, completed: false });
  const newTask = {
    ...response.data,
    timestamp: new Date().getTime() 
  };
  dispatch({ type: ADD_TASK, payload: newTask });
};

// Delete a task
export const deleteTask = id => async dispatch => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: DELETE_TASK, payload: id });
};

// Update a task
export const updateTask = (id, updatedItem) => async dispatch => {
  const response = await axios.put(`${API_URL}/${id}`, updatedItem);
  dispatch({ type: UPDATE_TASK, payload: response.data });
};
