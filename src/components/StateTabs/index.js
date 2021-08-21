import { taskState } from "../../utils";
import styles from './StateTabs.module.css';

export default function StateTabs({ selectedStateTask, setSelectedStateTask }) {
  function handleSelectedState(state) {
    setSelectedStateTask(state)
  }

  return (
    <div>
      <ul className={styles.tabs}>
        {taskState.map((state) => {
          const selectedClass = state === selectedStateTask ? 'selected' : '';
          return (
            <li
              className={`${styles.itemTabs} ${styles[selectedClass]}`}
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