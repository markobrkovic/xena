import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <>
      <nav>
        <LoginForm />
        <Link to="/games">Skip</Link>
      </nav>
    </>
  );
}

export default App;
