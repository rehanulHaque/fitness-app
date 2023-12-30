import React from 'react'
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useAppContext } from '../Context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {registerUser} = useAppContext()
    const navigate = useNavigate()
  
    const handelSubmit = (e) =>{
      e.preventDefault();
      const redirect = registerUser(name, email, password)
      if(redirect){
        toast.success('Registered successfully now Login')
        navigate('/')
      }
    }
    return (
      <main className="flex items-center justify-center">
        <ToastContainer/>
        <form className="min-w-[300px]  mx-auto mt-20" onSubmit={handelSubmit}>
          <h1 className="text-2xl font-bold mb-5 text-center">Create an account</h1>
          <div>
            <input
              className="border border-black px-4 py-1 outline-none rounded-md w-full"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="border border-black px-4 py-1 outline-none rounded-md w-full mt-3"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="border border-black px-4 py-1 outline-none rounded-md my-3 w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md w-full">Signup</button>
          <div className="h-[1px] w-full mt-3 bg-black"/>
          <p className="text-center mt-1">Already have an account? <Link className="underline" to="/">Log in</Link></p>
        </form>
      </main>
    );
}

export default Signup
