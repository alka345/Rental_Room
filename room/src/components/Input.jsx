import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import {v4 as uuid} from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// import { MdOutlineAttachFile } from "react-icons/md";
// import { GrGallery } from "react-icons/gr";


function Input() {
const [text, setText] = useState("")
const[img, setImg]= useState(null);
const {currentUser} = useContext(AuthContext)
console.log(currentUser.displayName);
const displayNameUser = currentUser.displayName
// const {data} = useContext(ChatContext)
const handleSend = async() => {
if(img){
const storageRef = ref(storage, displayNameUser);
// const res = await createUserWithEmailAndPassword(auth, email, password);
// const storageRef = ref(storage, displayName);
const uploadTask = uploadBytesResumable(storageRef, img);

uploadTask.on(
  (error)=>{
//setErr(true);
  },
()=>{
  getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
    await setDoc(doc(db,"chats",displayNameUser),{
      messages:arrayUnion({
        // id:uuid(),
        text,
        // senderId:currentUser.uid,
        date:Timestamp.now(),
        img:downloadURL
      })
    })
  })
}
);

}else{
  await setDoc(doc(db,"chats",displayNameUser),{
    messages : arrayUnion({
    //   id:uuid(),
      text,
    //   senderId:currentUser.uid,
      date:Timestamp.now(),
    }),
  });

}

await setDoc(doc(db,"userChats",currentUser.uid),{
//   [data.chatId + ".lastMessage"]:{
  text,
// },
// [data.chatId + ".date"]: serverTimestamp(),
});

await setDoc(doc(db,"userChats",currentUser.displayName),{
//   [data.chatId + ".lastMessage"]:{
  text,
// },
// [data.chatId + ".date"]: serverTimestamp(),
});


setText("")
setImg(null)
  }

  return (
    <div className='input'>
      <input type="text" 
      placeholder='Type Something...' 
      onChange={(e) => setText(e.target.value)}
      value={text}
      />

      <div className="send">
      {/* <MdOutlineAttachFile /> */}
        <input type="file"
        style={{display:"none"}} 
        id='file' 
        onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
        <img src="" alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
