import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
