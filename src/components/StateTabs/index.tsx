import React from 'react';
import { taskState } from "../../utils";

interface StateTabsProps {
  selectedStateTask: string;
  setSelectedStateTask: (state: string) => void;
}

export default function StateTabs({ selectedStateTask, setSelectedStateTask }: StateTabsProps) {
  function handleSelectedState(state: string) {
    setSelectedStateTask(state)
  }

  return (
    <div>
      <ul>
        {taskState.map((state) => {
          return (
            <li
              key={state}
              onClick={() => handleSelectedState(state)}
            >
              {state}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
