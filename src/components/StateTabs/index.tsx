import React, { useContext } from 'react';
import { TodoContext } from '../../context';

enum StateTask {
  ACTIVE = 'active',
  ALL = 'all',
}

const states = [StateTask.ALL, StateTask.ACTIVE];

export default function StateTabs() {
  const { setFilterState } = useContext(TodoContext);

  function handleSelectedState(state: StateTask) {
    setFilterState(state);
  }

  return (
    <div>
      <ul>
        {states.map((state) => {
          return (
            <li key={state} onClick={() => handleSelectedState(state)}>
              {state}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
