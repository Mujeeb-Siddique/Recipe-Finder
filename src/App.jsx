/* eslint-disable no-unused-vars */
import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Common/NavBar'
import Home from './Components/Pages/Home'
import Recipes from './Components/Pages/Recipes';
import RecipeDetails from './Components/Common/RecipeDetails';




const App = () => {
  
 
  return (
    <>
      <BrowserRouter>
           <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes' element={<Recipes/>}/>
            <Route path='/recipe/:recipeId' element={<RecipeDetails/>}/>
            <Route path='*' element={<div style={{ marginTop: "100px" }}>Page not found </div>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
