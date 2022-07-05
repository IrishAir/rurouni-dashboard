import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import ExercisesList from './pages/ExercisesList';
import Exercise from './pages/Exercise';
import Calendar from './pages/Calendar';
import AdminPanel from './pages/AdminPanel';
import AuthPage from './pages/AuthPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("https://rurouni-dashboard.herokuapp.com/login", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });
      const parseRes = await res.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <div className='app flex'>
      <Sidebar isAuthenticated={isAuthenticated}/>
      <div className='main-window'>
        <div className='container'>
          <Routes>
            <Route path ='/' element={<Dashboard />} />
            <Route path ='/exercises' element={<ExercisesList />} />
            <Route path ='/exercises/:id' element={<Exercise />} />
            <Route path ='/calendar' element={<Calendar />} />
            <Route 
              path='/login'
              element={!isAuthenticated
              ? (<AuthPage setAuth={setAuth} />)
              : (<Navigate to="/add_form" />)}
            />
            <Route 
              path='/add_form'
              element={isAuthenticated
              ? (<AdminPanel />)
              : (<Navigate to="/login" />)}
            />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;
