import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import WorkoutCard from '../components/cards/WorkoutCards';
import { getWorkouts } from '../api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [date, setDate] = useState("");
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittone-app-token");
    await getWorkouts(token, date ? `?date=${date}` : "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTodaysWorkout();
  }, [date]);
  
  return (
    
    <div className="p-4 flex flex-col md:flex-row md:justify-between">
    {/* Calendar component */}
    <div className="md:mr-4 mb-4 md:mb-0 md:w-1/3">
      <Typography className="text-2xl font-semibold mb-4">Select Date</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)}
        />
      </LocalizationProvider>
    </div>

  

    {/* Display added workouts cards */}
    <div className="flex-1 md:w-full"> 
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {todaysWorkouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </div>
    </div>
  </div>
);
}

export default Workouts;