import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, addTask, deleteTask, updateTask } from './redux/action';
import { FaTrashAlt } from "react-icons/fa";
import Task from './components/Task'

const App = () => {
  
  return (
    <>
    
      <Task />
    </>
  );
};

export default App;
