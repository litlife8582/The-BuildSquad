import './App.css'
import { supabase } from './supabase'
import { useEffect } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Plumbing from './pages/services/Plumbing'
import Electrical from './pages/services/Electrical'
import HouseRemodelling from './pages/services/HouseRemodelling'
import Construction from './pages/services/Construction'


function App() {
  useEffect(()=>{
    console.log("Supabase Client:",supabase)
  },[])

  return (
    <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/services/plumbing" element={<Plumbing/>}></Route>
            <Route path="/services/electrical" element={<Electrical/>}></Route>
            <Route path="/services/construction" element={<Construction/>}></Route>
            <Route path="/services/remodelling" element={<HouseRemodelling/>}></Route>
          </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
