import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COMPLETED, ALL } from '../../utils';
import CreateTask from "../CreateTask";
import StateTabs from '../StateTabs';
import TodoList from "../TodoList";
import Button from "../Button";
// Store
import {
  addTaskAction,
  completeTaskAction,
  deleteCompletedTasksAction,
  deleteTaskAction
} from '../../store/todo/actions';
import { todoSelector } from '../../store/todo';

export default function Todo() {
  const [filterTasks, setFilterTasks] = useState([]);
  const [selectedStateTask, setSelectedStateTask] = useState(ALL);
  const  dispatch = useDispatch();
  const tasksList = useSelector(todoSelector);


  useEffect(() => {
    if (selectedStateTask === ALL) {
      setFilterTasks(tasksList);
      return;
    }

    const selectedTasks = tasksList.filter((task) => task.state === selectedStateTask);
    setFilterTasks(selectedTasks);
  }, [selectedStateTask, setFilterTasks, tasksList]);

  function createTask(task) {
    dispatch(addTaskAction(task));
  }

  function updateTask(id, checked) {
    dispatch(completeTaskAction(id, checked));
  }

  function deleteCompletedTasks() {
    dispatch(deleteCompletedTasksAction());
  }

  function deleteTask(id) {
    dispatch(deleteTaskAction(id));
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
