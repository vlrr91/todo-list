import { shape, arrayOf, string, func } from 'prop-types';
import { COMPLETED } from '../../utils';
import styles from './TodoList.module.css';

export default function TodoList({ tasks, updateTask, selectedStateTab, deleteTask }) {
  function handleInputChecked(event, id) {
    const { checked } = event.target;
    updateTask(id, checked);
  }

  return (
    <ul className={styles.list}>
      {tasks.map(({ id, nameTask, state }) => {
        const completedClass = state === COMPLETED ? 'completed' : '';
        const checkedValue = state === COMPLETED;
        return (
          <li key={id} className={styles.itemTask}>
            <input
              id={id}
              type="checkbox"
              onChange={(event) => handleInputChecked(event, id)}
              checked={checkedValue}
            />
            <label className={styles[completedClass]} htmlFor={id}>{nameTask}</label>
            {selectedStateTab === COMPLETED && (
              <button type="button" onClick={() => deleteTask(id)}>✖</button>
            )}
          </li>
        );
      })}
    </ul>
  )
}

TodoList.propTypes = {
  tasks: arrayOf(shape({
    id: string.isRequired,
    nameTask: string.isRequired,
    state: string.isRequired,
  })),
  updateTask: func,
  selectedStateTab: string,
  deleteTask: func.isRequired,
};

TodoList.defaultProps = {
  tasks: [],
};
