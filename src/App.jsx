import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Routes>
  );
}

export default App;
