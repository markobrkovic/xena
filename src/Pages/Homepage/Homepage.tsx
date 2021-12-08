import Button from '../../components/Button/Button';
import fetchGameInfo from '../../utils/fetchAPI';

export default function Homepage(): JSX.Element {
  const game = fetchGameInfo();
  console.log(game);

  return (
    <>
      <Button
        text="Add to Cart"
        color="text--contrast"
        backgroundColor="tertiary"
        size="medium"
      />
    </>
  );
}
