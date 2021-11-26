import LoginForm from './LoginForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LoginForm',
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const LoginOrRegisterForm = () => <LoginForm />;
