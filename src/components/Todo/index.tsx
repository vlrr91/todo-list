import React from 'react';
import CreateTask from '../CreateTask';
import StateTabs from '../StateTabs';
import TodoList from '../TodoList';
// import Button from '../Button';
// import { Task } from '../../models';

export default function Todo() {
  return (
    <main>
      <StateTabs />
      <CreateTask />
      <TodoList />
      {/* {selectedStateTask === COMPLETED && filterTasks.length >= 0 && (
        <Button variant="secondary" onClick={deleteCompletedTasks}>
          delete all
        </Button>
      )} */}
    </main>
  );
}
