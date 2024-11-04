import React from 'react';

const TaskFilter = ({ filter, setFilter }) => (
  <div>
    <button onClick={() => setFilter('ALL')} className='Filbtn'>All</button>
    <button onClick={() => setFilter('COMPLETED')} className='Filbtn'>Completed</button>
    <button onClick={() => setFilter('PENDING')} className='Filbtn'>Pending</button>
  </div>
);

export default TaskFilter;
