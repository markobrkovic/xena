import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

export default {
  component: Homepage,
  title: 'Pages/Homepage',
};

export const Default = () => (
  <MemoryRouter initialEntries={['/homepage']}>
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  </MemoryRouter>
);
