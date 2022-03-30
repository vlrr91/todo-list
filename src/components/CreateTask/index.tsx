import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { TodoContext } from '../../context';
import Button from '../Button';

export default function CreateTask() {
  const [inputValue, setInputValue] = useState('');
  const { addTask } = useContext(TodoContext);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setInputValue(value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (inputValue) {
      addTask({
        id: uuidV4(),
        name: inputValue,
        completed: false,
      });
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
