// import React, {useState} from 'react'
// import {createUserWithEmailAndPassword} from 'firebase/auth'
// import { auth } from '../firebase';
// import { useNavigate, Link } from 'react-router-dom';

// function SignUp() {
//     const [err, setErr] = useState(false);
//     const navigate = useNavigate()
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const displayName = e.target[0].value;
//         console.log(displayName);
//         const email = e.target[1].value;
//         console.log(email);
//         const password = e.target[2].value;
//         console.log(password);
//         const file = e.target[3].value;
//         console.log(file);
//         try {
//             const res = await createUserWithEmailAndPassword(auth, email, password);
//             console.log(res);
//             navigate("/")
//         } catch (err) {
//             console.log(err);
//             setErr(true)
//         }
//     }
//   return (
//     <div className="formContainer">
//         <div className="formWrapper">
//             <span className="logo">Rental Room</span>
//             <span className="title">Sign Up</span>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder='display name' />
//                 <input type="email" placeholder='email' />
//                 <input type="password" placeholder='password' />
//                 <input style={{display: 'none'}}type="file" id='file' />
//                 <label htmlFor="file">
//                     <img src="" alt="" />
//                 </label>
//                 <button>Sign Up</button>
//                 {err && <span>Something went wrong</span>}
//             </form>
//             <p>You do have an account ?<Link to="/signin">Sign In</Link></p>
//         </div>
//     </div>
//   )
// }

// export default SignUp
  
//     ``

//     import React, { useState } from 'react'
// import {useNavigate, Link} from 'react-router-dom'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase';

// function SignIn() {
//   const [err, setErr] = useState(false)
//   const navigate = useNavigate()

//   const handleSubmit = async (e) =>{
//     e.preventDefault()
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/")
//     } catch (err) {
//       setErr(true);
      
//     }
//   }

//   return (
//   <div className="formContainer">
//     <div className="formWrapper">
//         <span className="logo">Rental - Room</span>
//         <span className="title">Sign In</span>
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder='email' />
//             <input type="password" placeholder='password' />
//             <button>Sign In</button>
//             {err && <span>Something went wrong</span>}
//         </form>
//         <p>You don't have an account?<Link to="/signup">Sign Up</Link></p>
//     </div>
//   </div>
//   )
// }

// export default SignIn
