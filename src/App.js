import React, { useState, useEffect } from "react";

import DrawerAppBar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import Type from "./components/Type";
import About from "./components/About";
import Types from "./components/Types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const typecolorchart = {
    Normal: "#A8A77A",
    Fire: "#EE8130",
    Water: "#6390F0",
    Electric: "#F7D02C",
    Grass: "#7AC74C",
    Ice: "#96D9D6",
    Fighting: "#C22E28",
    Poison: "#A33EA1",
    Ground: "#E2BF65",
    Flying: "#A98FF3",
    Psychic: "#F95587",
    Bug: "#A6B91A",
    Rock: "#B6A136",
    Ghost: "#735797",
    Dragon: "#6F35FC",
    Dark: "#705746",
    Steel: "#B7B7CE",
    Fairy: "#D685AD",
  };

  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route
          path="/:pokemonNumber"
          element={<PokemonDetails {...typecolorchart} />}
        ></Route>
        <Route
          path="/type/:type"
          element={<Type {...typecolorchart} />}
        ></Route>
        <Route
          exact
          path="/"
          element={<PokemonList typecolorchart={typecolorchart} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/types" element={<Types />}></Route>
      </Routes>
    </>
  );
};

export default App;
