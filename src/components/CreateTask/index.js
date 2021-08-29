import { useState } from 'react';
import { func } from 'prop-types';
import Button from "../Button";

export default function CreateTask({ createTask }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue) {
      createTask(inputValue);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </form>
  );
}

CreateTask.propTypes = {
  createTask: func.isRequired,
}
