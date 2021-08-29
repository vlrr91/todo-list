export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_COMPLETED_TASKS = 'DELETE_COMPLETED_TASKS';

export const addTaskAction = (task) => {
  return { type: ADD_TASK, task };
};
export const deleteTaskAction = (id) => ({ type: DELETE_TASK, id });
export const completeTaskAction = (id, state) => ({ type: COMPLETE_TASK, payload: { id, state }});
export const deleteCompletedTasksAction = () => ({ type: DELETE_COMPLETED_TASKS });
