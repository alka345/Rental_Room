import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function SignIn() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
      
    }
  }

  return (
  <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">Rental - Room</span>
        <span className="title">Sign In</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <button>Sign In</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account?<Link to="/signup">Sign Up</Link></p>
    </div>
  </div>
  )
}

export default SignIn
