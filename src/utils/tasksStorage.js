export function saveTasks(tasks) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasks() {
  const tasks = window.localStorage.getItem('tasks');
  return JSON.parse(tasks);
}
