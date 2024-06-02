import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.scss'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/'>
      <Route index element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
