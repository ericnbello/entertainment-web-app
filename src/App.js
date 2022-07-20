import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import axios from "./axios";

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
import Search from "./pages/Search";

function App() {
  const API_KEY = process.env.REACT_APP_TMDb_API_KEY

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
    },
    {
      name: Search,
      path: '/search'
    }
  ]

  const firebaseConfig = {
    apiKey: "AIzaSyB9GzLY5EVFNvLsxHfq0q-rWeGRywXBi1Y",
    authDomain: "streaming-web-app.firebaseapp.com",
    databaseURL: "https://streaming-web-app-default-rtdb.firebaseio.com/",
    projectId: "streaming-web-app",
    storageBucket: "streaming-web-app.appspot.com",
    messagingSenderId: "877009414204",
    appId: "1:877009414204:web:f409327402bfaffbfb3b39",
    measurementId: "G-R9E3J9YNW9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firebaseDbUrl = "https://streaming-web-app-default-rtdb.firebaseio.com/";

  const [allMedia, setAllMedia] = useState([])
  const allMediaArr = []

  useEffect(() => {
    axios.get(firebaseDbUrl + "media.json").then((response) => {
      setAllMedia(response.data)
      // console.log(allMedia)
      allMediaArr.push(response.data)
      // console.log(allMediaArr)
    })
    // eslint-disable-next-line
  }, [allMedia])

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
    // eslint-disable-next-line
  }, [])

  return (
    <div className="bg-darkBlue text-white font-outfit py-6">
      <div className="flex flex-col lg:flex-row max-w-7xl xl:max-w-[150rem] mx-auto min-h-screen">
        <Nav loggedIn={isLoggedIn} />
          <main className="px-6 lg:px-24 w-full">
            <Routes>

              {/** Create category pages and pass props to each */}
              {navigationTabs.map((tab, idx) => {
                return (
                  <Route key={idx} path={tab.path} element={<tab.name 
                    // searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}
                    />} 
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
              {Object.keys(allMedia).map((key, index) => {
                return (
                  <Route
                    key={index}
                    path={allMedia[key].title.replace(/\W+/g, '-').toLowerCase()}
                    element={
                      <Video
                        id={allMedia[key].id}
                        title={allMedia[key].title}
                        category={allMedia[key].media_type}
                        year={allMedia[key].release_year}
                        overview={allMedia[key].overview}
                        link={allMedia[key].title.replace(/\W+/g, '-').toLowerCase()} 
                        image={`https://image.tmdb.org/t/p/w185${allMedia[key].poster_path}`}
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