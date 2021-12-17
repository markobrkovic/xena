import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GameInfo from './GameInfo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/GameInfo',
  component: GameInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const GameInfoPage = () => (
  <MemoryRouter initialEntries={['/game/1']}>
    <Routes>
      <Route path="/game/:id" element={<GameInfo />} />
    </Routes>
  </MemoryRouter>
);
