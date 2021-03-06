import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FeaturedGame from './FeaturedGame';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FeaturedGame',
  component: FeaturedGame,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const FeaturedGameOnHomepage = () => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" element={<FeaturedGame />} />
    </Routes>
  </MemoryRouter>
);
