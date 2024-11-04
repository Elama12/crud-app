import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, addTask, deleteTask, updateTask } from '../redux/action';
import { FaTrashAlt } from 'react-icons/fa';
import TaskFilter from './TaskFilter';



const TaskManager = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask(taskTitle));
      setTaskTitle('');
    }
  };

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };
  
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return task.completed;
    return !task.completed;
  })
  
  const sortedTasks = [...filteredTasks].sort((a, b) => b.timestamp - a.timestamp);

  

  const handleToggleTask = task => {
    dispatch(updateTask(task.id, { ...task, completed: !task.completed }));
  };

  

  return (
    <main>
      <h2>Todo App</h2>
      <input 
        type="text" 
        value={taskTitle} 
        onChange={e => setTaskTitle(e.target.value)} 
        placeholder="Add a new task" 
        className='inputbox'
      />
      <button onClick={handleAddTask} className='btn'>Add Task</button>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <ul>
        {sortedTasks.map(task => (
          <li key={task.id} className='item'>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggleTask(task)}
          
            />
            {task.title}
            <button onClick={() => handleDeleteTask(task.id)} className='DelBtn'><FaTrashAlt /></button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TaskManager;
