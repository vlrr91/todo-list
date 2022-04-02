import React, { ChangeEvent, useContext } from 'react';
import { TodoContext } from '../../context';
import { Task } from '../../models/Task';
import { List, Item, Label, Input, DeleteButton } from './styles';

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
    <List>
      {todo.map((task) => {
        const { id, name, completed } = task;
        return (
          <Item key={id}>
            <Input
              id={id}
              type="checkbox"
              onChange={(event) => handleInputChecked(event, task)}
              checked={completed}
            />
            <Label htmlFor={id}>{name}</Label>
            {completed && (
              <DeleteButton type="button" onClick={() => deleteTask(id)}>
                ✖
              </DeleteButton>
            )}
          </Item>
        );
      })}
    </List>
  );
}
