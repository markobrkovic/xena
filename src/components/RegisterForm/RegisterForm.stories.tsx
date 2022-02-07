import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from './RegisterForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RegisterForm',
  component: RegisterForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const FormForRegistration = () => (
  <MemoryRouter initialEntries={['/register']}>
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  </MemoryRouter>
);
