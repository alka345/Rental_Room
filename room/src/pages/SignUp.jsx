import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';

function SignUp() {
    const [err, setErr] = useState(false);
    
    const handleSubmit = async (e) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res);
        } catch (err) {
            console.log(err);
            setErr(true)
        }
        e.preventDefault();
        const displayName = e.target[0].value;
        console.log(displayName);
        const email = e.target[1].value;
        console.log(email);
        const password = e.target[2].value;
        console.log(password);
        const file = e.target[3].value;
        console.log(file);
    }
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Rental Room</span>
            <span className="title">Sign Up</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display: 'none'}}type="file" id='file' />
                <label htmlFor="file">
                    <img src="" alt="" />
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account ?Sign In</p>
        </div>
    </div>
  )
}

export default SignUp
