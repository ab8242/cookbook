import './App.css'
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [ recipeList, setRecipeList ] = useState([])

  return (
    <>
      <Routes>
        <Route index element={ <MainPage recipeList={recipeList} setRecipeList={setRecipeList} /> }/>
      </Routes>
    </>
  )
}

export default App
