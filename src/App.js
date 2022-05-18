import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

// Page components
import Nav from './components/Nav';
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarks from "./pages/Bookmarks";
import Account from "./pages/Account";

function App() {
  return (
    <div className="bg-darkBlue text-white font-sans min-h-screen py-6">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <Nav />
          <main className="px-6 lg:px-24 w-full">
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/movies" element ={<Movies />} />
              <Route path="/series" element ={<Series />} />
              <Route path="/bookmarks" element ={<Bookmarks />} />
              <Route path="/account" element ={<Account />} />
            </Routes>
          </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
export default App;