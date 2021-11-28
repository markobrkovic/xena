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
  backgroundColor,
  size,
}: InputProps) {
  return (
    <input
      className={`${styles.input} ${styles[color]} ${styles[backgroundColor]}  ${styles[size]}`}
      placeholder={placeholder}
    />
  );
}
