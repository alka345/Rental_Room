import React, {useState} from 'react'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth, storage, db } from '../firebase';
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 

function SignUp() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        console.log(displayName);
        const email = e.target[1].value;
        console.log(email);
        const password = e.target[2].value;
        console.log(password);
        const file = e.target[3].value;
        console.log(file);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);

            await uploadBytesResumable(storageRef, file).then(()=>{
            getDownloadURL(storageRef).then(async(downloadURL) => {
            console.log('File available at', downloadURL);
            
            try {

                await updateProfile(res.user, {
                    displayName,
                    photoURL: downloadURL
                })
                console.log(res.user);


                
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });

                await setDoc(doc(db, "userChats", res.user.uid),{})
                
            } catch (err) {
                setErr(true)
                
            }
      });
    })
            console.log(res);
            navigate("/")
        } catch (err) {
            console.log(err);
            setErr(true)
        }
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
                    <img src="" alt="img" />
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You do have an account ?<Link to="/signin">Sign In</Link></p>
        </div>
    </div>
  )
}

export default SignUp
  
