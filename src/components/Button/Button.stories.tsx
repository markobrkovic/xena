import ButtonElement from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const Small = () => (
  <ButtonElement
    text="Add to Wishlist"
    color="text"
    backgroundColor="quaternary-light"
    size="small"
  />
);

export const Medium = () => (
  <ButtonElement
    text="Add to Cart"
    color="text--contrast"
    backgroundColor="tertiary"
    size="medium"
  />
);

export const Large = () => (
  <ButtonElement
    text="EXPLORE"
    color="text"
    backgroundColor="primary"
    size="large"
  />
);
