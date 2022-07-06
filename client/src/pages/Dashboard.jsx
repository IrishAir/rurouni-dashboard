import React, { useEffect, useState } from 'react';
import DashboardStats from '../components/DashboardStats';
import ProfileDashboard from '../components/ProfileDashboard';
import WorkoutPlan from '../components/WorkoutPlan';

export default function Dashboard() {

  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    try {
      const response = await fetch('/calendar');
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
		<div className='profile-page'>
			<h1>Информация о тренировках</h1>
			<div className='dashboard-area card'>
				<ProfileDashboard records={records} />
			</div>
			<DashboardStats records={records} />
			<WorkoutPlan />
		</div>
	);
}
