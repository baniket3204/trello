
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD3ClWb-8VHgoTqRxODR1qVKfN5DNDpf0",
  authDomain: "trello-104d7.firebaseapp.com",
  projectId: "trello-104d7",
  storageBucket: "trello-104d7.appspot.com",
  messagingSenderId: "654036629808",
  appId: "1:654036629808:web:42a6dc90b95e99f7b5f0f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
  signInWithPopup(auth , provider).then((result) =>{
         const name = result.user.displayName;
         const email = result.user.email;
         const profilepic = result.user.photoURL;

         localStorage.setItem("name" , name);
         localStorage.setItem("email" , email);
         localStorage.setItem("profilepic" , profilepic);
  }).then(() => window.location.reload(false));
}