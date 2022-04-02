import { Dispatch, ReactNode, SetStateAction } from 'react';

import { Task } from '../Task';

enum StateTask {
  ACTIVE = 'active',
  ALL = 'all',
}

interface TypeTodoProvider {
  todo: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  filterState: StateTask;
  setFilterState: Dispatch<SetStateAction<StateTask>>;
}

type TodoProviderProps = { children: ReactNode };

export { StateTask, TypeTodoProvider, TodoProviderProps };
