import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const Login = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, checkLogin } = useAppContext();
  const navigate = useNavigate()


  useEffect(()=> {
    const logg = async() => {
      const response = await checkLogin()
      setLoggedIn(response)
    }
    logg()
  if(loggedIn) navigate('/home')
  }, [loggedIn])
  const handelSubmit = (e) => {
    e.preventDefault();
    const redirect = loginUser(email, password);
    if(redirect) navigate('/home')
  };
  return (
    <main className="flex items-center justify-center">
      <form className="min-w-[300px]  mx-auto mt-20" onSubmit={handelSubmit}>
        <h1 className="text-2xl font-bold mb-5 text-center">
          Login to your account
        </h1>
        <div>
          <input
            className="border border-black px-4 py-1 outline-none rounded-md w-full"
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
        <button className="bg-black text-white px-4 py-2 rounded-md w-full">
          Login
        </button>
        <div className="h-[1px] w-full mt-3 bg-black" />
        <p className="text-center mt-1">
          Don't have an account?{" "}
          <Link className="underline" to="/register">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
