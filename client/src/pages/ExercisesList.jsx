import React, { useEffect, useState } from 'react';
import ResultsArea from '../components/ResultsArea';
import SearchBar from '../components/SearchBar';

export default function ExercisesList() {

  const [exercises, setExercises] = useState([]);
  const [result, setResult] = useState('');
  
  const getExercises = async () => {
    try {
      const response = await fetch("https://rurouni-dashboard.herokuapp.com/exercises");
      const jsonData = await response.json();

      setExercises(jsonData);
    } catch (err) {
      console.error(err.message);     
    }
  }

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <div className="exercises-page">
      <h1>Искать упражнение</h1>
      <SearchBar setResult = {setResult} />
      <ResultsArea result = {result} exercises = {exercises} />
    </div>
  )
}