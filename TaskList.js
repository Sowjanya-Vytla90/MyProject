import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, markAsCompleted, deleteTask, editTask }) => {
    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div>
            <h3>Pending Tasks</h3>
            {pendingTasks.map((task) => (
                <TaskItem key={task.id} task={task} markAsCompleted={markAsCompleted} deleteTask={deleteTask} editTask={editTask}/>
            ))}

            <h3>Completed Tasks</h3>
            {completedTasks.map((task) => (
                <TaskItem key={task.id} task={task} markAsCompleted={markAsCompleted} deleteTask={deleteTask} editTask={editTask}/>
            ))}
        </div>
    );
};

export default TaskList;