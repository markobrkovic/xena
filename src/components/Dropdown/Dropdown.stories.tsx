import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Dropdown from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const DropdownMenu = () => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" element={<Dropdown />} />
    </Routes>
  </MemoryRouter>
);
