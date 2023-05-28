import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = true;
  
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (
        <LoginScreen/>
      ) : (
        <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        </Routes>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;
