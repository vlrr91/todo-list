import { ADD_TASK, DELETE_COMPLETED_TASKS, UPDATE_TASK, DELETE_TASK } from './actions';
import { ACTIVE } from '../../utils';
import { Task } from '../../models';
import { RootState } from '..';

const initialState: Task[] = [];

interface TodoDispatch {
  type: string;
  payload: Task;
}

// Reducer
export default function todoReducer(state = initialState, action: TodoDispatch): Task[] {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case UPDATE_TASK:
      const taskIndex = state.findIndex((task) => task.id === action.payload.id);
      const tasks = [...state];
      tasks[taskIndex] = payload;
      return tasks;
    case DELETE_COMPLETED_TASKS: {
      return state.filter((task) => task.state === ACTIVE);
    }
    case DELETE_TASK: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
}

// Selector
export const todoSelector = (state: RootState) => state.todo;
