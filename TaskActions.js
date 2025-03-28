import React from "react";

const TaskActions = ({ task, markAsCompleted, deleteTask }) => {
    return (
        <div>
            <button onClick={() => markAsCompleted(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskActions;