import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Teste from './teste/teste';
import Conteudo from './conteudo/conteudo';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Teste/>}/>
      <Route path='conteudo' element={<Conteudo/>}/>
    </Routes>
    </BrowserRouter>
  );
};


