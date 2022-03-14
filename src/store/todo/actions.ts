import { Task } from "../../models";

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_COMPLETED_TASKS = 'DELETE_COMPLETED_TASKS';

export const addTaskAction = (task: Task) => {
  return { type: ADD_TASK, payload: task };
};
export const deleteTaskAction = (task: Task) => ({ type: DELETE_TASK, payload: task });
export const completeTaskAction = (task: Task) => ({ type: UPDATE_TASK, payload: task });
export const deleteCompletedTasksAction = () => ({ type: DELETE_COMPLETED_TASKS });
