import './bootstrap.css';
import { Login } from './components/Login';
import { LandingPage } from './components/LandingPage';
import {RegisterPage} from './components/RegisterPage';
import {Orders} from './components/Orders';
import {CreateOrder} from './components/CreateOrder';
import {UpdateOrder} from './components/UpdateOrder';

function App() {
  return (
    <div className="App">
      <RegisterPage/>
    </div>
  );
}

export default App;
