import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { func } from 'prop-types';
import Button from "../Button";
import { ACTIVE } from '../../utils';

export default function CreateTask({ createTask }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue) {
      const newTask = {
        id: uuidV4(),
        nameTask: inputValue,
        state: ACTIVE,
      }
      createTask(newTask);
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
