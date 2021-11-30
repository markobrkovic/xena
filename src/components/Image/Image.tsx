type ImageProps = {
  size: string;
  image_id: string;
};

export default function Image({ size, image_id }: ImageProps): JSX.Element {
  return (
    <img
      src={`https://images.igdb.com/igdb/image/upload/t_${size}/${image_id}.jpg`}
    />
  );
}
