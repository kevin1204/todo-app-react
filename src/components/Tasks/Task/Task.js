import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './Task.scss'; 

const Task = ({ task, onStatusChange, onTaskRemove }) => {
    return (
        <div className="task">
            <h3>{task.description}</h3>
            <div className="details">
                <div>Id: {task.id}</div>
                <div>Status: {task.done ? <span className="completed">Completed</span> : 'Open'}</div>
            </div>
            <div className="actions">
                <button
                    className={`toggle-status ${task.done ? 'completed' : ''}`}
                    onClick={() => onStatusChange(task.id)}
                >
                    {task.done ? 'Mark as Open' : 'Complete Task'}
                </button>
                <button
                    className="remove-task"
                    onClick={() => onTaskRemove(task.id)}
                >
                    <FaTrash /> Remove
                </button>
            </div>
        </div>
    );
};

export default Task;
