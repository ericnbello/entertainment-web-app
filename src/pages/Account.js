import React, {useState} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "../firebase";

export default function Account(){
    const [loginForm, setLoginForm] = useState(true);
    const [hasAccount, setHasAccount] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const handleCreateEmail = event => setEmail(event.target.value);
    const handleCreatePassword = event => setPassword(event.target.value);
    // const handleLoginEmail = 
    
    const firebaseConfig = {
        apiKey: "AIzaSyB9GzLY5EVFNvLsxHfq0q-rWeGRywXBi1Y",
        authDomain: "streaming-web-app.firebaseapp.com",
        projectId: "streaming-web-app",
        storageBucket: "streaming-web-app.appspot.com",
        messagingSenderId: "877009414204",
        appId: "1:877009414204:web:f409327402bfaffbfb3b39",
        measurementId: "G-R9E3J9YNW9"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setLoggedIn(true)
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // setLoggedIn(false)
        });

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setLoggedIn(true)
            return (
                <div id="dashboard" className={user===true ? `block` : `hidden`}>
                <h1>Dashboard</h1>
            {/* {loggedIn===true ? 
                <button onClick={setLoggedIn(false)}>Log Out</button>                
                :
                <button onClick={setLoggedIn(true)}>Log In</button>} */}
            </div>
            )
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // setLoggedIn(false)
        });
    
    // auth().onAuthStateChanged(user => {
    //     if(!user) {
    //         window.location = '/account'; //If User is not logged in, redirect to login page
    //     }
    // });

    return(
        <div className="account flex flex-col mx-auto items-center py-12 gap-12">
            <div className="w-10 h-10">
                <img src="/assets/logo.svg" alt="logo"/>
            </div>
            <form className={(loginForm===true ? `flex flex-col bg-semiDarkBlue h-1/3 w-3/4 md:w-1/2 lg:w-1/3 rounded-xl p-6 gap-8` : `hidden`)}>
                <h1 className="flex justify-start text-xl text-white pt-4">Login to get started</h1>
                <h2 className="flex justify-start text-xl text-white pt-4">Login</h2>
                <input className="bg-transparent border-b-[1px] border-white pl-2 py-2" type="email" placeholder="Email address" 
                // onChange={handleEmailClick}
                 required/>
                <input className="bg-transparent border-b-[1px] border-white pl-2 py-2" type="password" placeholder="Password" 
                // onChange={handlePasswordClick} 
                required/>
                <button className="w-full px-6 py-3 bg-red text-white hover:bg-white hover:text-darkBlue rounded-lg" type="submit" >
                {/* // onSubmit={signInWithEmailAndPassword(auth, email, password)} */}
                {/* // {(loggedIn===true 
                //         ? (<div id="dashboard" className="bg-yellow-500">
                //             <h1>Dashboard</h1>
    //             </div>) 
                        : "")}>*/}
                        Login to your account
                </button>
                <p className="flex justify-center gap-2 text-white">Don't have an account? 
                    <span>
                        <button onClick={() => setLoginForm(!loginForm)} className="text-red hover:text-white cursor-pointer">Sign Up</button>
                    </span>
                </p>
            </form>

            <form id="signup" className={(loginForm===false ? `flex flex-col bg-semiDarkBlue h-1/3 w-3/4 md:w-1/2 lg:w-1/3 rounded-xl p-6 gap-8` : `hidden`)} onSubmit={createUserWithEmailAndPassword(auth, email, password)}>
                <h1 className="flex justify-start text-xl text-white pt-4">Create an account to get started</h1>
                <h2 className="flex justify-start text-xl text-white pt-4">Sign Up</h2>
                <input className="bg-transparent border-b-[1px] border-white pl-2 py-2" type="email" placeholder="Email address" name="email" onChange={handleCreateEmail} required/>
                <input className="bg-transparent border-b-[1px] border-white pl-2 py-2" type="password" placeholder="Password" name="password" onChange={handleCreatePassword} required/>
                {/* <input className="bg-transparent border-b-[1px] border-white pl-2 py-2" type="password" placeholder="Repeat Password" required/> */}
                <button className="w-full px-6 py-3 bg-red text-white rounded-lg hover:bg-white hover:text-darkBluehover:bg-white hover:text-darkBlue" type="submit" onClick={() => setHasAccount(true)}>Create an account</button>
                <p className="flex justify-center gap-2 text-white">Already have an account? 
                    <span>
                        <button onClick={() => setLoginForm(!loginForm)} className="text-red hover:text-white cursor-pointer">Login</button>
                    </span>
                </p>
            </form>

            <div id="dashboard" className={loggedIn===true ? `block` : `hidden`}>
                <h1>Dashboard</h1>
            {/* {loggedIn===true ? 
                <button onClick={setLoggedIn(false)}>Log Out</button>                
                :
                <button onClick={setLoggedIn(true)}>Log In</button>} */}
            </div>
        </div>
    )
}