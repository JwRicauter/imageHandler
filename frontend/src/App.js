import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./Layout";
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';

import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route 
            path="/" exact 
            element={<Home />} 
          />
          <Route 
            path="/new" exact 
            element={<New />} 
          />
          <Route 
            path="/about" exact 
            element={<New />} 
          />
          <Route
            path="/image/:id" exact
            element={<Detail />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

