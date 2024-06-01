import React from 'react'

function SignIn() {
  return (
  <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">Rental - Room</span>
        <span className="title">Sign In</span>
        <form>
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <button>Sign In</button>
        </form>
        <p>You don't have an account?Sign Up</p>
    </div>
  </div>
  )
}

export default SignIn
