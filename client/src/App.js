import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Profile from './pages/Profile';
import Exercises from './pages/Exercises';
import Exercise from './pages/Exercise';
import Calendar from './pages/Calendar';
import AddForm from './pages/AddForm';

function App() {
  return (
    <div className="app flex">
      <Sidebar/>
      <Routes>
        <Route path ='/' element={<Profile />} />
        <Route path ='/exercises' element={<Exercises />} />
        <Route path ='/exercises/:id' element={<Exercise />} />
        <Route path ='/calendar' element={<Calendar />} />
        <Route path ='/add_form' element={<AddForm />} />
      </Routes>
    </div>
  );
}

export default App;
