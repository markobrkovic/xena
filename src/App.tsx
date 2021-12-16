import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <>
      <nav>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
        <Link to="/homepage">Skip</Link>
      </nav>
    </>
  );
}

export default App;
