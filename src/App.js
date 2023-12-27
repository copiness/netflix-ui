import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import './app.scss'
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const auth = localStorage.getItem('auth');

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home/>} />

        <Route path="/login" element={<Login />} />

        <Route path="/watch" element={<Watch />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
