import { useState } from 'react'
import {toast}  from 'react-toastify';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './component/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default App
