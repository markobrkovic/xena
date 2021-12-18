import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Friends from './Friends';

export default {
  title: 'Pages/Friends',
  component: Friends,
};

export const FriendsPage = () => (
  <MemoryRouter initialEntries={['/friends']}>
    <Routes>
      <Route path="/friends/" element={<Friends />} />
    </Routes>
  </MemoryRouter>
);
