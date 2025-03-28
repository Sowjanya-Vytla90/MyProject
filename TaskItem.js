import React, { useState } from 'react';
import TaskActions from './TaskActions';

const TaskItem = ({ task, markAsCompleted, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.description);

  const handleEditChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleEditSubmit = () => {
    editTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={updatedTask} 
            onChange={handleEditChange} 
          />
          <button onClick={handleEditSubmit}>Save</button>
        </>
      ) : (
        <>
            <span>{task.description}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <TaskActions
        task={task}
        markAsCompleted={markAsCompleted}
        deleteTask={deleteTask}
        />
        </div>
  );
};

export default TaskItem;