import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from '../pages/Cuisine';
import Searched from '../pages/Searched';
import Recipes from './Recipes';
import { AnimatePresence } from 'framer-motion';


function Pages() {
  const locaion = useLocation();
  return (

    <AnimatePresence mode='wait'>
      <Routes location={locaion} key={locaion.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipes />} />
        
      </Routes>
    </AnimatePresence>

  )
}

export default Pages;