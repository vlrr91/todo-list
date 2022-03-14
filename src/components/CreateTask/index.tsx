import React, { useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Task } from '../../models';
import Button from "../Button";

interface CreateTaskProps {
  createTask: (task: Task) => void;
}

export default function CreateTask({ createTask }: CreateTaskProps) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setInputValue(value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (inputValue) {
      createTask({
        id: uuidV4(),
        name: inputValue,
        state: 'active',
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