import React, { useEffect, useState } from 'react';
import CalendarList from '../components/CalendarList';

export default function Calendar() {

  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    try {
      const response = await fetch("http://localhost:5000/calendar");
      const jsonData = await response.json();

      setRecords(jsonData);
    } catch (err) {
      console.error(err.message);     
    }
  }

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <div className="calendar-page">
      <h1>Календарь тренировок</h1>
      <div className="calendar-page__wrapper">
        <CalendarList workoutList={records}/>
      </div>
    </div>
  )
}