import styles from './Line.module.css';

type LineProps = {
  className?: string;
  width: 'half' | 'viewport';
  highestOpacityPoint: 'start' | 'middle' | 'middle--secondary' | 'end';
};

export default function Line({
  className,
  width,
  highestOpacityPoint,
}: LineProps): JSX.Element {
  return (
    <div
      className={`${className} ${styles.line} ${styles[width]} ${styles[highestOpacityPoint]}`}
    ></div>
  );
}
