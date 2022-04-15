import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/Sign up/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}
        ></Route>
        <Route path='/' element={<Home />}
        ></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </div>
  );
}

export default App;
