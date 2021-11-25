import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
