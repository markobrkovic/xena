type TitleProps = {
  className?: string;
  title: string;
};

export default function Title({ title }: TitleProps): JSX.Element {
  return <h1>{title}</h1>;
}
