import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GameWishlist from './GameWishlist';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/GameWishlist',
  component: GameWishlist,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const GameWishlistOnHomepage = () => (
  <MemoryRouter initialEntries={['/game/1']}>
    <Routes>
      <Route
        path="/game/:id"
        element={
          <GameWishlist
            key={1}
            id={1}
            name={'The Witcher'}
            screenshots={[
              {
                image_id:
                  'https://hackster.imgix.net/uploads/attachments/1317693/_Ek101jDIJo.blob?auto=compress%2Cformat&w=400&h=300&fit=min',
              },
            ]}
            release_dates={[{ y: 2008 }]}
            summary={'Rick'}
            genres={[{ name: 'RPG' }]}
          />
        }
      />
    </Routes>
  </MemoryRouter>
);
