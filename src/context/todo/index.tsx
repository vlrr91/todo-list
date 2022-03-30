import React, { createContext } from 'react';

import useTodo from './useTodo';
import { TodoProviderProps, TypeTodoProvider } from '../../models/TodoContext';

const TodoContext = createContext<TypeTodoProvider>({} as TypeTodoProvider);

function TodoProvider({ children }: TodoProviderProps) {
  const value = useTodo();
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export { TodoContext, TodoProvider };
