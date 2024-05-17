import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import AddWorkout from '../components/cards/AddWorkouts';
import { addWorkout, fetchAllWorkouts } from '../api';

function Dashboard() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [date, setDate] = useState("");
  const [workout, setWorkout] = useState(`#Legs\n-Back Squat\n-0 setsX15 reps\n-0 kg\n-0 min`);
  const [totalReps, setTotalReps] = useState(0);
  const [todayTimeSpent, setTodayTimeSpent] = useState(0);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [loading, setLoading] = useState(false);

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittone-app-token");
    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const fetchAllWorkoutData = async () => {
    const token = localStorage.getItem("fittone-app-token");
    try {
      const response = await fetchAllWorkouts(token, date ? `?date=${date}` : "");
      setWorkouts(response.data.workouts);
      setTotalReps(response.data.totalReps);
      setTodayTimeSpent(response.data.todayTimeSpent);
      setTotalTimeSpent(response.data.totalTimeSpent);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchAllWorkoutData();
  }, []); 


  return (
    <div className='h-[100vh]'>
      <div className="p-4">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        {/* Cards for total reps, time spent, and total time for all workouts */}
        <Grid container spacing={3} className="mb-4">
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Total Reps</Typography>
                <Typography variant="h4">{totalReps}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Time Spent</Typography>
                <Typography variant="h4">{todayTimeSpent} min</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Total Time for All Workouts</Typography>
                <Typography variant="h4">{totalTimeSpent} min</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Add New Workout section */}
        <div className="md:w-1/3 lg:w-2/3">
          <Typography className="text-2xl font-semibold mb-4">Enter Today&apos;s Workouts</Typography>
          <AddWorkout workout={workout} setWorkout={setWorkout} addNewWorkout={addNewWorkout} buttonLoading={buttonLoading} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
