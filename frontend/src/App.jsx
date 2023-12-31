import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreateContactPage from './pages/CreateContactPage';
import axios from 'axios';

function App() {
  return (
    <div className='font-montserrat h-screen w-screen overflow-x-auto'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/createContact' element={<CreateContactPage />} />
      </Routes>
    </div>
  );
}

export default App
