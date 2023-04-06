CREATE TABLE workouts(
    workout_id INT PRIMARY KEY,
    trainee_id INT,
    coach_ID INT,
    duration FLOAT,
    week_day VARCHAR(50),
    message VARCHAR(50),
    description VARCHAR(50az )
);
CREATE TABLE exercises(
    exercise_id INT PRIMARY KEY,
    muscle_group VARCHAR(50),
    exercise_name VARCHAR(50)
);

CREATE TABLE workout_exercises(
    workout_id INT, 
    exercise_id INT,
    setsToDo INT,
    reps INT,
    FOREIGN KEY (workout_id) REFERENCES workouts (workout_id),
    FOREIGN KEY (exercise_id) REFERENCES exercises (exercise_id)
)