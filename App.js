import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markAsCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Management Tool</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        markAsCompleted={markAsCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;