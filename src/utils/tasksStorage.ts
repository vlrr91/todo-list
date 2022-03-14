import { Task } from "../models";

export function saveTasks(tasks: Task) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasks(): Task[] {
  const tasks = window.localStorage.getItem('tasks');

  if (tasks) {
    return JSON.parse(tasks) || [];
  }

  return [];
}
