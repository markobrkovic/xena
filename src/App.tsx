import { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function doFetch() {
      const response = await fetch('/api/hello');
      const result = await response.json();
      setMessage(result.message);
    }
    doFetch();

    // fetch('/api/hello')
    //   .then((response) => response.json())
    //   .then((result) => setMessage(result.message));
  }, []);

  return (
    <>
      <LoginForm />
      <p>Hello</p>
      <p>{message}</p>
    </>
  );
}

export default App;
