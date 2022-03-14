import React, { ChangeEvent } from 'react';
import { Task } from '../../models';
import { ACTIVE, COMPLETED } from '../../utils';

interface TodoListProps {
  tasks: Task[];
  updateTask: (task: Task) => void;
  selectedStateTab: string; 
  deleteTask: (task: Task) => void;
}

export default function TodoList({
  tasks = [],
  updateTask,
  selectedStateTab,
  deleteTask
}: TodoListProps) {
  function handleInputChecked(event: ChangeEvent<HTMLInputElement>, task: Task) {
    const { checked } = event.target;
    updateTask({
      ...task,
      state: checked ? COMPLETED : ACTIVE,
    });
  }

  return (
    <ul>
      {tasks.map((task) => {
        const { id, name, state } = task;
        const checkedValue = state === COMPLETED;
        return (
          <li>
            <input
              id={id}
              key={id}
              type="checkbox"
              onChange={(event) => handleInputChecked(event, task)}
              checked={checkedValue}
            />
            <label htmlFor={id}>{name}</label>
            {selectedStateTab === COMPLETED && (
              <button type="button" onClick={() => deleteTask(task)}>✖</button>
            )}
          </li>
        );
      })}
    </ul>
  )
}

