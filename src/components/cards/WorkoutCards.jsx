import React from "react";
import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="flex-1 min-w-250px max-w-400px p-4 md:p-6 border border-gray-300 rounded-lg shadow-md flex flex-col gap-4">
      <div className={`bg-${workout.category} text-white px-2 py-1 rounded-md text-sm font-semibold`}>
        #{workout?.category}
      </div>
      <div className="text-lg font-semibold text-primary">{workout?.workoutName}</div>
      <div className="text-base text-secondary">
        Count: {workout?.sets} sets X {workout?.reps} reps
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <FitnessCenterRounded className="text-primary" />
          <span>{workout?.weight} kg</span>
        </div>
        <div className="flex items-center gap-1">
          <TimelapseRounded className="text-primary" />
          <span>{workout?.duration} min</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
