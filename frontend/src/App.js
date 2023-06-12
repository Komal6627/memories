
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter, Route, Routes} from "react-router-dom"; 

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        </Routes>
      </BrowserRouter>
        
        
    </div>
  );
}

export default App;
