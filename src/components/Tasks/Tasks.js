import Task from './Task/Task';
import { FaTrashAlt } from 'react-icons/fa';
import './Tasks.scss';

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {
  return (
    <div className="tasks-container">
      <h2>Tasks List</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onTaskRemove={onTaskRemove}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks to show</p>
      )}
      <button onClick={onClearTasks} className="clear-tasks"><FaTrashAlt /> Clear Tasks</button>
    </div>
  );
}

export default Tasks;
