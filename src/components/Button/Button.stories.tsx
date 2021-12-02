import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Small = () => (
  <Button
    text="Add to Wishlist"
    color="text"
    backgroundColor="quaternary-light"
    size="small"
  />
);

export const Medium = () => (
  <Button
    text="Add to Cart"
    color="text--contrast"
    backgroundColor="tertiary"
    size="medium"
  />
);

export const Large = () => (
  <Button text="EXPLORE" color="text" backgroundColor="primary" size="large" />
);
