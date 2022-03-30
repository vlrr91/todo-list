import React, { ChangeEvent, useContext } from 'react';
import { TodoContext } from '../../context';
import { Task } from '../../models/Task';

export default function TodoList() {
  const { todo, updateTask, deleteTask } = useContext(TodoContext);

  function handleInputChecked(
    event: ChangeEvent<HTMLInputElement>,
    task: Task
  ) {
    updateTask({
      ...task,
      completed: event.target.checked,
    });
  }

  return (
    <ul>
      {todo.map((task) => {
        const { id, name, completed } = task;
        return (
          <li key={id}>
            <input
              id={id}
              type="checkbox"
              onChange={(event) => handleInputChecked(event, task)}
              checked={completed}
            />
            <label htmlFor={id}>{name}</label>
            {completed && (
              <button type="button" onClick={() => deleteTask(id)}>
                ✖
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
