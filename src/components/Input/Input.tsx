import styles from './Input.module.css';

type InputProps = {
  className?: string;
  placeholder: string;
  color: string;
  size: string;
  backgroundColor: string;
};

export default function Input({
  className,
  placeholder,
  color,
  backgroundColor,
  size,
}: InputProps) {
  return (
    <input
      className={`${className} ${styles.input} ${styles[color]} ${styles[backgroundColor]}  ${styles[size]}`}
      placeholder={placeholder}
    />
  );
}
