import { useEffect, useState, useRef } from 'react';
import { Task } from '../../models/Task';
import { StateTask } from '../../models/TodoContext';
import { getTasks, saveTasks } from '../../utils';

export default function useTodo() {
  const tasks = getTasks();
  const [todo, setTodo] = useState<Task[]>(tasks);
  const [filteredTodo, setFilteredTodo] = useState<Task[]>(tasks);
  const [filterState, setFilterState] = useState<StateTask>(StateTask.ALL);
  const initialLoad = useRef(true);

  useEffect(() => {
    if (filterState === StateTask.ACTIVE) {
      setFilteredTodo(todo.filter((task) => task.completed));
      return;
    }

    setFilteredTodo(todo);
  }, [filterState, todo]);

  useEffect(() => {
    if (!initialLoad.current) saveTasks(todo);
  }, [todo]);

  useEffect(() => {
    initialLoad.current = false;
  }, []);

  function addTask(task: Task) {
    setTodo((prevState) => [...prevState, task]);
  }

  function updateTask(task: Task) {
    const newTasks = [...todo];
    const taskIndex = newTasks.findIndex((element) => element.id === task.id);

    if (taskIndex >= 0) {
      newTasks[taskIndex] = task;
    }

    setTodo(newTasks);
  }

  function deleteTask(id: string) {
    setTodo((prevState) => prevState.filter((task) => task.id !== id));
  }

  return {
    todo: filteredTodo,
    addTask,
    updateTask,
    deleteTask,
    setFilterState,
  };
}
