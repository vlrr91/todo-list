import { node, string, func } from 'prop-types';
import styles from './Button.module.css';

export default function Button({ children, variant, type, onClick }) {
  return (
    <button
      type={type}
      className={`${styles.button}
      ${styles[variant]}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node.isRequired,
  variant: string,
  type: string,
  onClick: func,
}

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  onClick: () => {},
}