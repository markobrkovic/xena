import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginForm from './components/LoginForm/LoginForm';
import './global.css';
import Homepage from './Pages/Homepage/Homepage';
import Wishlist from './Pages/Wishlist/Wishlist';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="homepage" element={<Homepage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
