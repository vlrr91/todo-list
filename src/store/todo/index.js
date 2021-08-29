import { v4 as uuidV4 } from 'uuid';
import { ADD_TASK, DELETE_COMPLETED_TASKS, COMPLETE_TASK, DELETE_TASK } from './actions';
import { ACTIVE, COMPLETED } from '../../utils';

const initialState = [];

// Reducer
export default function todoReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: uuidV4(),
          nameTask: action.task,
          state: ACTIVE,
        }
      ];
    case COMPLETE_TASK:
      const taskIndex = state.findIndex((task) => task.id === action.payload.id);
      const newTasks = [...state];
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        state: action.payload.state ? COMPLETED : ACTIVE,
      };
      return newTasks;
    case DELETE_COMPLETED_TASKS: {
      return state.filter((task) => task.state === ACTIVE);
    }
    case DELETE_TASK: {
      return state.filter((todo) => todo.id !== action.id);
    }
    default:
      return state;
  }
}

// Selector
export const todoSelector = (state) => state.todo;
