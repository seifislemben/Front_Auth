import {Routes,BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Forgetpassword from './Pages/Forgetpassword';
import Home from './Pages/Home';
import ResetPassword from './Pages/ResetPassword';
import PasswordReset from './Pages/PasswordReset';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/PasswrdReset' element={<PasswordReset/>}/>
          <Route path='/ResetPassword' element={<ResetPassword/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Forgetpassword' element={<Forgetpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
