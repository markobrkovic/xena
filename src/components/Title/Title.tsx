import styles from './Title.module.css';

type TitleProps = {
  className?: string;
  title: string;
  size?: string;
  weight: string;
};

export default function Title({
  className,
  title,
  size,
  weight,
}: TitleProps): JSX.Element {
  let content;

  switch (size) {
    case 'h1':
      content = <h1 className={`${className} ${styles[weight]}`}>{title}</h1>;
      break;
    case 'h2':
      content = <h2 className={`${className} ${styles[weight]}`}>{title}</h2>;
      break;
    case 'h3':
      content = <h3 className={`${className} ${styles[weight]}`}>{title}</h3>;
      break;
    case 'h4':
      content = <h4 className={`${className} ${styles[weight]}`}>{title}</h4>;
      break;
    default:
      content = <h1 className={`${className} ${styles[weight]}`}>{title}</h1>;
  }

  return <>{content}</>;
}
