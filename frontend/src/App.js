
import './App.css';
import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom"; 

function App() {
  const currentUser = true;
  const Layout = () =>{
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
           <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) =>{
      if (!currentUser) {
        return <Navigate to="/login"/>
      }
      return children
  }

  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ProtectedRoute>
          <Layout/>
        </ProtectedRoute>}/>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
        
        
    </div>
  );
}

export default App;
