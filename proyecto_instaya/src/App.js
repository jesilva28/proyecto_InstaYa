import './bootstrap.css';
import {Login} from './components/Login';
import { LandingPage } from './components/LandingPage';
import {RegisterPage} from './components/RegisterPage';
import Orders from './components/Orders';
import CreateOrder from './components/CreateOrder';
import UpdateOrder from './components/UpdateOrder';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path=''
        element= {<LandingPage />}
      />
      <Route
        path='login'
        element= {<Login />}
      />
      <Route
        path='register'
        element= {<RegisterPage />}
      />
      <Route
        path='orders'
        element= {<Orders />}
      />
      <Route
        path='createorder'
        element= {<CreateOrder />}
      />
      <Route
        path='updateorder/:id'
        element= {<UpdateOrder />}
      />
    </Routes>
  );
}

export default App;