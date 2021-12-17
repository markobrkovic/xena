import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Wishlist from './Wishlist';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Wishlist',
  component: Wishlist,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const WihslistInfo = () => (
  <MemoryRouter initialEntries={['/wishlist']}>
    <Routes>
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  </MemoryRouter>
);
