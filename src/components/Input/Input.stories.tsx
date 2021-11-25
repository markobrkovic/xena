import InputElement from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: InputElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const UsernameAndPassword = () => (
  <div
    style={{
      backgroundColor: 'var(--color-primary)',
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <InputElement
      placeholder="Enter username"
      color="text--contrast"
      size="medium"
      backgroundColor="background--contrast"
    />
  </div>
);

export const DrowpdownSearch = () => (
  <div
    style={{
      backgroundColor: 'var(--color-background)',
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <InputElement
      placeholder="Search by tag or name"
      color="text--contrast"
      size="large"
      backgroundColor="background--contrast"
    />
  </div>
);

export const WishlistSearch = () => (
  <div
    style={{
      backgroundColor: 'var(--color-background)',
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <InputElement
      placeholder="Search by tag or name"
      color="text"
      size="small"
      backgroundColor="background"
    />
  </div>
);
