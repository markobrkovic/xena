import Wishlist from './Wishlist';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Wishlist',
  component: Wishlist,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const WishlistInfo = () => <Wishlist />;
