import { Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Home/Chekout/Checkout';
import Home from './Pages/Home/Home';
import Orders from './Pages/Home/Orders/Orders';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
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
        <Route path='/checkout/:chefId' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }>
        </Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        }>
        </Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </div >
  );
}

export default App;
