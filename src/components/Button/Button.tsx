import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  color: string;
  backgroundColor: string;
  size: string;
};

export default function Button({
  text,
  color,
  backgroundColor,
  size,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[backgroundColor]} ${styles[size]}`}
    >
      {text}
    </button>
  );
}
