import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import allTitles from "./mediaData.json";

// Page components
import Nav from './components/Nav';
import Video from "./components/Video";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarks from "./pages/Bookmarks";
import Account from "./pages/Account";

function App() {
  return (
    <div className="bg-darkBlue text-white font-outfit py-6">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen">
        <Nav />
          <main className="px-6 lg:px-24 w-full">
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/movies" element ={<Movies />} />
              <Route path="/series" element ={<Series />} />
              <Route path="/bookmarks" element ={<Bookmarks />} />
              <Route path="/account" element ={<Account />} />

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