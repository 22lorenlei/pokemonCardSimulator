import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonCardSimulator from "./pages/pokemonCardSimulator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/pokemonCardSimulator"
          element={<PokemonCardSimulator />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
