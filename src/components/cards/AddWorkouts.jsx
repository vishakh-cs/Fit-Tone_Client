import React, { useState } from "react";
import TextInput from "../TextInput";
import Button from "../Button";

const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  const [isEdited, setIsEdited] = useState(true);

  // Check if the workout includes "-0 min"
  const isDurationZero = workout.includes("-0 min");

  return (
    <div className="flex-1 min-w-280px p-6 border border-gray-300 rounded-lg shadow-md flex flex-col gap-4">
      <div className="font-semibold text-primary text-lg">Add New Workout</div>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:\n\n#Category\n-Workout Name\n-Sets\n-Reps\n-Weight\n-Duration`}
        value={workout}
        handelChange={(e) => {
          setWorkout(e.target.value);
          setIsEdited(true); // Set isEdited to true whenever the workout is edited
        }} 
      />
      <Button
        text="Add Workout"
        small
        onClick={() => {
          if (!isDurationZero) {
            addNewWorkout();
          }
        }} 
        isLoading={buttonLoading}
        // Disable the button if duration is "0 min"
        disabled={buttonLoading || isDurationZero}
      />
    </div>
  );
};

export default AddWorkout;
