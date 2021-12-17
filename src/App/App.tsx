import { Route, Routes, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import GameInfo from '../Pages/GameInfo/GameInfo';
import Homepage from '../Pages/Homepage/Homepage';
import Wishlist from '../Pages/Wishlist/Wishlist';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/game/:id" element={<GameInfo />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <nav>
        <Link to="/homepage">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </>
  );
}

export default App;
