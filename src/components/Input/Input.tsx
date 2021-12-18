import styles from './Input.module.css';

type InputProps = {
  onChange: (value: string) => void;
  type?: string;
  placeholder: string;
  className?: string;
  color: string;
  size: string;
  backgroundColor: string;
};

export default function Input({
  onChange,
  type,
  className,
  placeholder,
  color,
  backgroundColor,
  size,
}: InputProps) {
  return (
    <input
      type={type}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      className={`${className} ${styles.input} ${styles[color]} ${styles[backgroundColor]}  ${styles[size]}`}
      placeholder={placeholder}
    />
  );
}
