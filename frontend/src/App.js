
import './App.css';
import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"; 

function App() {
  const currentUser = true;
  const Layout = () =>{
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
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
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<ProtectedRoute>
          <Layout/>
        </ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
        
        
    </div>
  );
}

export default App;
