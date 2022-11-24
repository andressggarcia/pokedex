import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import InputName from './components/InputName'
import Pokemons from './components/Pokemons'
import PokemonsDetail from './components/PokemonsDetail'
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InputName/>} />

        <Route element={<ProtectedRoutes />}>            
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:id" element={<PokemonsDetail />} />  
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
