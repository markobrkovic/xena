import styles from './Line.module.css';

type LineProps = {
  width: 'half' | 'viewport';
  highestOpacityPoint: 'start' | 'middle' | 'end';
};

export default function Line({
  width,
  highestOpacityPoint,
}: LineProps): JSX.Element {
  return (
    <div
      className={`${styles.line} ${styles[width]} ${styles[highestOpacityPoint]}`}
    ></div>
  );
}
