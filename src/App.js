import * as React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import firebase from "./firebase";
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
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = event => setSearchTerm(event.target.value);

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

  return (
    <div className="bg-darkBlue text-white font-outfit py-6">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen">
        <Nav />
          <main className="px-6 lg:px-24 w-full">
            <Routes>

              {/** Create category pages and pass props to each */}
              {navigationTabs.map((tab) => {
                return (
                  <Route path={tab.path} element={<tab.name arr={allTitles} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleChange={handleChange}/>} 
                  />
                )
              })}
              
              {/** Create account pages */}
              <Route path="/account" element ={<Account />} />
              <Route path="/account/dashboard" element ={<Dashboard />} />

              {/** Create a page for each video title */}
              {allTitles.map((video) => {
                return (
                  <Route 
                    path={video.title.replace(/\W+/g, '-').toLowerCase()} 
                    element={
                      <Video
                        title={video.title} 
                        image={video.thumbnail.regular.large}
                      />
                    } 
                  />
                )
              })}
            </Routes>
          </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;