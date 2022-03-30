import { Task } from '../models/Task';

function saveTasks(tasks: Task[]) {
  window.localStorage.setItem('todo', JSON.stringify(tasks));
}

function getTasks(): Task[] {
  const tasks = window.localStorage.getItem('todo');

  if (tasks) {
    return JSON.parse(tasks) || [];
  }

  return [];
}

export { saveTasks, getTasks };
