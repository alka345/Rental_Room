import React, {useContext} from 'react'
import { auth } from '../firebase'
import {AuthContext} from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import Input from '../components/Input'

function Review(){

    const {currentUser} = useContext(AuthContext)
    console.log(currentUser);

    return(
        <div>
            <button onClick={() => signOut(auth)}>logout</button>
            <br />
            <img width={100} height={100} src={currentUser.photoURL} alt="currentuser" />
            <br />
            <span>{currentUser.displayName}</span>
            <br />
        <br />
        <br />
        <br />
        <br />

            <div>
                <Input/>
            </div>

        </div>
    )
}

export default Review
