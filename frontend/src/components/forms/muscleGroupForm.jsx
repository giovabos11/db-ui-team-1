import { useState } from "react";

export const MuscleGroupForm = () => {
  const [muscle, setMuscle] = useState("");

  const handleChange = (e) => {
    setMuscle(e.target.value);
  };

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          id="muscleGroup"
          name="muscleGroup"
          value={muscle}
          onChange={handleChange}
          placeholder="Enter a muscle group"
          className="form-input-sm"
        />
      </div>
    </form>
  );
};


