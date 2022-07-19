import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "../pages/Create";
import Feed from "../pages/Feed";
import Saved from "../pages/Saved";

import Info from "./Info";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import PaletteItem from "./PaletteItem";


const App = () => {
  return (
    <Router>
      {/* <div > */}

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/create" element={<Create />} />
        <Route path="/palette/:id" element={<PaletteItem/>}/>

        <Route path="/saved" element={<Saved />} />

        <Route path="/info" element={<Info />} />
        <Route path="/*" element={<NotFound />} />
        
      </Routes>

      {/* </div> */}
    </Router>
  );
};

export default App;
