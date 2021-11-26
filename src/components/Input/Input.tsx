import styles from './Input.module.css';

type InputProps = {
  placeholder: string;
  color: string;
  size: string;
  backgroundColor: string;
};

export default function Input({
  placeholder,
  color,
  size,
  backgroundColor,
}: InputProps) {
  return (
    <input
      className={`${styles.input} ${styles[color]} ${styles[size]} ${styles[backgroundColor]}`}
      placeholder={placeholder}
    />
  );
}
