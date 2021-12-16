import Navbar from './Navbar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const NavbarOnWishlistPage = () => <Navbar title="Wishlist" />;
