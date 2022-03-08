import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import ExerciseStats from '../components/ExerciseStats';
import ExerciseChart from '../components/ExerciseChart';

export default function Exercise() {
  
  const { state } = useLocation();
  
  const [exercise, setExercise] = useState([]);
  
  const getExercise = async () => {
    try {
      const response = await fetch(`http://localhost:5000/exercises/${state}`);
      const jsonData = await response.json();
      
      setExercise(jsonData);
    } catch (err) {
      console.error(err.message);     
    }
  }
  
  useEffect(() => {
    getExercise();
  });
  
  const totalTrained = exercise?.history?.length;
  const lastTrained = exercise.history?.at(-1).date;
  
  return (
    <div className="exercise-page">
      <div className="flex">
        <h1>{exercise.name}</h1>
        <div className="exercise-search-area">
          <SearchBar />
        </div>
      </div>
      <ExerciseStats 
        personalRecord = {exercise.personal_record}
        units = {exercise.units}
        currentWeight = {exercise.weight}
        weeklyVolume = {lastTrained}
        totalTrained = {totalTrained}
      />
      <div className="exercise-page-chart card">
        <h3>Изменение веса</h3>
        <ExerciseChart />
      </div>
    </div>
  )
}
