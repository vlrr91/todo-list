import React from 'react';
import CreateTask from '../CreateTask';
import StateTabs from '../StateTabs';
import TodoList from '../TodoList';
import { Content } from './styles';

export default function Todo() {
  return (
    <main>
      <StateTabs />
      <Content>
        <CreateTask />
        <TodoList />
      </Content>
    </main>
  );
}
