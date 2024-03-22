import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Forgetpassword from './Pages/Forgetpassword';
import Home from './Pages/Home';
import PasswordReset from './Pages/PasswordReset';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/api/auth/login' element={<Login />} />
          <Route path='/api/auth/password/reset' element={<Forgetpassword />} />
          <Route path='/api/auth/password/reset/confirm/:token' element={<PasswordReset />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;