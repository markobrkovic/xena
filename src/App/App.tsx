import { Route, Routes } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Friends from '../Pages/Friends/Friends';
import GameInfo from '../Pages/GameInfo/GameInfo';
import Homepage from '../Pages/Homepage/Homepage';
import Wishlist from '../Pages/Wishlist/Wishlist';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/game/:id" element={<GameInfo />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </>
  );
}

export default App;
