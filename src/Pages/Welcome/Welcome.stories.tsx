import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';

export default {
  component: Welcome,
  title: 'Pages/Welcome',
};

export const Default = () => (
  <MemoryRouter initialEntries={['/Welcome']}>
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  </MemoryRouter>
);
