type TitleProps = {
  className?: string;
  size: string;
  image_id: string;
};

export default function Title({ size, image_id }: TitleProps): JSX.Element {
  return (
    <img
      src={`https://images.igdb.com/igdb/image/upload/t_${size}/${image_id}.jpg`}
    />
  );
}
