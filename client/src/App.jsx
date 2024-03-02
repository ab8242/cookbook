import './App.css'
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from '../components/MainPage';
import CreatePage from '../components/CreatePage';

function App() {
  const [ recipeList, setRecipeList ] = useState([]);

  return (
    <>
      <Routes>
        <Route index element={ < MainPage recipeList={recipeList} setRecipeList={setRecipeList} /> } />
        <Route path="/recipe/create" element={ < CreatePage /> } />
      </Routes>
    </>
  )
}

export default App
