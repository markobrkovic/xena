import React from 'react';
import styles from './Button.module.css';

type ButtonElementProps = {
  text: string;
  color: string;
  backgroundColor: string;
  size: string;
};

export default function ButtonElement({
  text,
  color,
  backgroundColor,
  size,
}: ButtonElementProps) {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[backgroundColor]} ${styles[size]}`}
    >
      {text}
    </button>
  );
}
