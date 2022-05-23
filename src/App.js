import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import allTitles from "./mediaData.json";

// Components
import Nav from './components/Nav';
import Video from "./components/Video";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarks from "./pages/Bookmarks";
import Dashboard from "./pages/Dashboard";
import AccountForm from "./components/AccountForm";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = e => setSearchTerm(e.target.value);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmail = event => setEmail(event.target.value);
  const handlePassword = event => setPassword(event.target.value);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigationTabs = [
    {
      name: Home,
      path: '/'
    },
    {
      name: Movies,
      path: '/movies'
    },
    {
      name: Series,
      path: '/series'
    },
    {
      name: Bookmarks,
      path: '/bookmarks'
    }
  ]

  const firebaseConfig = {
    apiKey: "AIzaSyB9GzLY5EVFNvLsxHfq0q-rWeGRywXBi1Y",
    authDomain: "streaming-web-app.firebaseapp.com",
    projectId: "streaming-web-app",
    storageBucket: "streaming-web-app.appspot.com",
    messagingSenderId: "877009414204",
    appId: "1:877009414204:web:f409327402bfaffbfb3b39",
    measurementId: "G-R9E3J9YNW9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // Signed in
        // const user = response.user;
        setIsLoggedIn(true)
        navigate('/dashboard')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email Already in Use');
      }
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        setIsLoggedIn(true)
        navigate('/dashboard')
        sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
      })
      .catch((error) => {
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
      })
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <div className="bg-darkBlue text-white font-outfit py-6">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen">
        <Nav loggedIn={isLoggedIn} />
          <main className="px-6 lg:px-24 w-full">
            <Routes>

              {/** Create category pages and pass props to each */}
              {navigationTabs.map((tab) => {
                return (
                  <Route path={tab.path} element={<tab.name arr={allTitles} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>} 
                  />
                )
              })}
              
              {/** Create account pages */}
              <Route path="/login"
                     element={<AccountForm 
                                  title="Login" 
                                  buttonText="Login to your account"
                                  setEmail={handleEmail}
                                  setPassword={handlePassword}
                                  handleAction={handleLogin}
                                  formFooterText="Don't have an account?"
                                  formFooterLink="/signup"
                                  formFooterLinkText="Sign Up" />} />
              <Route path="/signup" 
                     element={<AccountForm 
                                  title="Sign Up" 
                                  buttonText="Create an account"
                                  setEmail={handleEmail}
                                  setPassword={handlePassword} 
                                  handleAction={handleSignUp}
                                  formFooterText="Already have an account?"
                                  formFooterLink="/login"
                                  formFooterLinkText="Login" />}/>
              <Route path="/dashboard"
                      element={<Dashboard />} />
                
              {/** Create a page for each video title */}
              {allTitles.map((video) => {
                return (
                  <Route 
                    path={video.title.replace(/\W+/g, '-').toLowerCase()} 
                    element={
                      <Video
                        title={video.title}
                        category={video.category}
                        year={video.year}
                        rating={video.rating}
                        link={video.title.replace(/\W+/g, '-').toLowerCase()} 
                        image={video.thumbnail.regular.large}
                      />
                    } 
                  />
                )
              })}
            </Routes>
            <ToastContainer autoClose={5000}  />
          </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;