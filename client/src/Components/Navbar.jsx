import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const {checkLogin} = useAppContext()

  useEffect(()=> {
    const logg = async() => {
      const response = await checkLogin()
      setLoggedIn(response)
    }
    logg()
  }, [loggedIn])
  return (
    <header className='px-4 py-3'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link className='text-2xl font-bold' to={'/home'}>StayFIT</Link>
        </div>
        <div>
          <Link to={'/home'}>Home</Link>
          {
            loggedIn ? (
              <>
              <Link to='/createexercise' className='ml-3'>Create</Link>
              <Link to={'/profile'} className='ml-3'>Profile</Link>
              </>
            ) : <Link to={'/'} className='ml-3'>Login</Link>
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
