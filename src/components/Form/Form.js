import { useState } from "react";
import { FaPlus } from 'react-icons/fa'
import './Form.scss'

function Form({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // Validate the user input.
    if (description === '') {
      setErrorMessage('Enter a description.');
    }
    else {

      // Add the task.
      onAddTask(description, status);

      // Reset the form state.
      setDescription('')
      setStatus('open');
      setErrorMessage('');
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleFormSubmission}>
        <h2 className="title">Add a new task:</h2>

        {/* Conditional render of the error message */}
        {errorMessage !== '' && (
          <div>{errorMessage}</div>
        )}

        {/* Description Field */}
        <label>
          Description:
          <input
            type='text'
            maxLength={150}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        {/* Status Field */}
        <label>
          Status:
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value='open'>Open</option>
            <option value='completed'>Completed</option>
          </select>
        </label>

        {/* Submission Button */}
        <button>
          {/* Adding the Plus icon to the add task button */}
          <FaPlus /> Add 
        </button>
      </form>
    </div>
  );
}

export default Form;