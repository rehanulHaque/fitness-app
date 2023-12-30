import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'

const Profile = () => {
    const [userProfile, setUserProfile] = useState()
    const navigate = useNavigate()
    const {profile} = useAppContext()

    useEffect(()=> {
        const logg = async() => {
            const response = await profile()
            setUserProfile(response)
        }
        logg()
    }, [])
    const handelCilck = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
  return (
    <div className=''>
      <div className='mx-auto mt-10 block max-w-[300px]'>
        {userProfile && <h2><span className='font-bold text-xl'>Username</span>: {userProfile.name}</h2>}
        {userProfile && <h2 className='mb-4'><span className='font-bold text-xl'>Email</span>: {userProfile.email}</h2>}
      <button className='border border-black w-full py-3 bg-black text-white' onClick={handelCilck}>Logout</button>
      </div>
    </div>
  )
}

export default Profile
