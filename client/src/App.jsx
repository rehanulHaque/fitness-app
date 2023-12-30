import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Profile from './Pages/Profile'
import CreateForm from './Pages/CreateForm'

const App = () => {
  return (
    <>
    <main className='w-full'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/createexercise' element={<CreateForm/>}/>
    </Routes>
    </main>
    </>
  )
}

export default App
