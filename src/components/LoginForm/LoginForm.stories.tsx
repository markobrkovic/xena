import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LoginForm',
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const FormForLogin = () => (
  <MemoryRouter initialEntries={['/login']}>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </MemoryRouter>
);
