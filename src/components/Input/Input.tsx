import styles from './Input.module.css';

type InputProps = {
  onSubmit: (value: string) => void;
  placeholder: string;
  className?: string;
  color: string;
  size: string;
  backgroundColor: string;
};

export default function Input({
  onSubmit,
  className,
  placeholder,
  color,
  backgroundColor,
  size,
}: InputProps) {
  return (
    <input
      onChange={(event) => {
        onSubmit(event.target.value);
      }}
      className={`${className} ${styles.input} ${styles[color]} ${styles[backgroundColor]}  ${styles[size]}`}
      placeholder={placeholder}
    />
  );
}
