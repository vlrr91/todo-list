import { useState, useEffect } from 'react';
import { ACTIVE, COMPLETED, ALL, saveTasks, getTasks } from '../../utils';
import CreateTask from "../CreateTask";
import StateTabs from '../StateTabs';
import TodoList from "../TodoList";
import Button from "../Button";

export default function Todo() {
  const tasksFromStorage = getTasks();
  const [tasks, setTasks] = useState(tasksFromStorage || []);
  const [filterTasks, setFilterTasks] = useState([]);
  const [selectedStateTask, setSelectedStateTask] = useState(ALL);

  useEffect(() => {
    saveTasks(tasks);

    if (selectedStateTask === ALL) {
      setFilterTasks(tasks);
      return;
    }

    const selectedTasks = tasks.filter((task) => task.state === selectedStateTask);
    setFilterTasks(selectedTasks);
  }, [selectedStateTask, setFilterTasks, tasks]);

  function createTask(task) {
    setTasks((prevState) => [...prevState, task]);
  }

  function updateTask(id, checked) {
    setTasks((prevState) => {
      const taskIndex = prevState.findIndex((task) => task.id === id);
      const newTasks = [...prevState];
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        state: checked ? COMPLETED : ACTIVE,
      };
      return newTasks;
    });
  }

  function deleteCompletedTasks() {
    console.log('delete')
    const activeTasks = tasks.filter((task) => task.state === ACTIVE);
    setTasks(activeTasks);
  }

  function deleteTask(id) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <main>
      <StateTabs
        selectedStateTask={selectedStateTask}
        setSelectedStateTask={setSelectedStateTask} />
      {selectedStateTask !== COMPLETED && (
        <CreateTask createTask={createTask} />
      )}
      <TodoList
        tasks={filterTasks}
        updateTask={updateTask}
        selectedStateTab={selectedStateTask}
        deleteTask={deleteTask}
      />
      {selectedStateTask === COMPLETED && (
        <Button variant="secondary" onClick={deleteCompletedTasks}>delete all</Button>
      )}
    </main>
  );
}
