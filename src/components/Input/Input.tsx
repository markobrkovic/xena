import fetchGameName from '../../utils/fetchAPI';
import styles from './Input.module.css';

type InputElementProps = {
  placeholder: string;
  color: string;
  size: string;
  backgroundColor: string;
};

export default function InputElement({
  placeholder,
  color,
  size,
  backgroundColor,
}: InputElementProps) {
  return (
    <input
      className={`${styles.input} ${styles[color]} ${styles[size]} ${styles[backgroundColor]}`}
      placeholder={placeholder}
    />
  );
}
