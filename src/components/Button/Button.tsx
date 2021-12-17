import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  text: string;
  color: string;
  backgroundColor: string;
  size: string;
};

export default function Button({
  onClick,
  className,
  text,
  color,
  backgroundColor,
  size,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.button} ${styles[color]} ${styles[backgroundColor]} ${styles[size]}`}
    >
      {text}
    </button>
  );
}
