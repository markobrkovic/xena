type ImageProps = {
  className?: string;
  size: string;
  image_id: string;
};

export default function Image({
  className,
  size,
  image_id,
}: ImageProps): JSX.Element {
  return (
    <img
      className={`${className}`}
      src={
        image_id.length < 50
          ? `https://images.igdb.com/igdb/image/upload/t_${size}/${image_id}.jpg`
          : image_id
      }
    />
  );
}
