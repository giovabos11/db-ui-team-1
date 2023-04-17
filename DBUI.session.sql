-- Drop the database
DROP DATABASE IF EXISTS DBUI;

-- Create database
CREATE DATABASE DBUI;

-- Use database
USE DBUI;

-- Reset tables
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Trainees;
DROP TABLE IF EXISTS Coaches;
DROP TABLE IF EXISTS Workouts;
DROP TABLE IF EXISTS Exercises;
DROP TABLE IF EXISTS Foods;
DROP TABLE IF EXISTS Trainees;
DROP TABLE IF EXISTS Messages;
DROP TABLE IF EXISTS Trainees;
DROP TABLE IF EXISTS Trainee_Workout_Plans;

-- Create tables
CREATE TABLE IF NOT EXISTS Users(
    user_id int AUTO_INCREMENT PRIMARY KEY,
  	email varchar(255) NOT NULL UNIQUE,
  	password varchar(255) NOT NULL,
  	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    age int NOT NULL

);

CREATE TABLE IF NOT EXISTS Coaches(
	coach_id int AUTO_INCREMENT PRIMARY KEY,
  rating float
  	
);

CREATE TABLE IF NOT EXISTS Trainees(
  trainee_id int,
  height float,
  weight float,
	coach_id int,
  	
	FOREIGN KEY (coach_id) REFERENCES Coaches(coach_id)
);

CREATE TABLE IF NOT EXISTS Workouts(
	workout_id int AUTO_INCREMENT PRIMARY KEY,
  trainee_id int,
  coach_id int,
  muscle_group varchar(255),
  duration int,
  week_day varchar(32),
  description varchar(1024),
  
  FOREIGN key (trainee_id) REFERENCES Trainees(trainee_id),
  FOREIGN KEY (coach_id) REFERENCES Coaches(coach_id)
);

CREATE TABLE IF NOT EXISTS Exercises(
	exercise_id int AUTO_INCREMENT PRIMARY KEY,
  muscle_type varchar(32) NOT NULL,
  excerice_name varchar(255) NOT NULL,
  rep_cout int,
  set_count int,
  workout_id INT,
  
  FOREIGN KEY (workout_id) REFERENCES workouts(workout_id)	
);

CREATE TABLE IF NOT EXISTS Foods(
	food_id int AUTO_INCREMENT PRIMARY KEY,
  trainee_id int,
  name varchar(255) NOT NULL,
  protein_amount float NOT NULL DEFAULT 0,
  carbohidrate_amount float NOT NULL DEFAULT 0,
  fat_amount float NOT NULL DEFAULT 0,
  in_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (trainee_id) REFERENCES Trainees(trainee_id)
);

CREATE TABLE IF NOT EXISTS Messages(
	message_id int AUTO_INCREMENT PRIMARY KEY,
  sender_id int,
  reciever_id int,
  content varchar(1024) NOT NULL,
  sent_timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (sender_id) REFERENCES Coaches(coach_id),
  FOREIGN KEY (reciever_id) REFERENCES Trainees(trainee_id)
);
-- Create relational tables
CREATE TABLE IF NOT EXISTS Trainee_Workout_Plans(
  plain_id INT AUTO_INCREMENT PRIMARY KEY,
	workout_id int,
  trainee_id int,
  coach_id int,
  start_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  end_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id),
  FOREIGN KEY (trainee_id) REFERENCES Trainees(trainee_id),
  FOREIGN KEY (coach_id) REFERENCES Coaches(coach_id)
);

CREATE TABLE IF NOT EXISTS workout_exercises (
    workout_id int,
    exercise_id int,
    num_sets INT NOT NULL,
    num_reps INT NOT NULL,
    weight INT NOT NULL DEFAULT 0,

    FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id),
    FOREIGN KEY (exercise_id) REFERENCES Exercises(exercise_id)
);

-- Populate tables
INSERT INTO Users (email, password, first_name, last_name, age)
VALUES
    ('bobdylan@gmail.com', 'password123', 'bob', 'dylan', 25);
    ('johndoe@example.com', 'password123', 'John', 'Doe', 25),
    ('janedoe@example.com', 'password456', 'Jane', 'Doe', 30),
    ('bobsmith@example.com', 'password789', 'Bob', 'Smith', 40);
  
INSERT INTO Coaches (rating)
VALUES
    (1),
    (2),
    (3),
    (4),
    (5);

INSERT INTO Trainees (height, weight, coach_id)
VALUES
    (5.6, 150, (select coach_id from Coaches where rating = 5)),
    (6.1, 175, (select coach_id from Coaches where rating = 3)),
    (5.8, 140, (select coach_id from Coaches where rating = 1));

INSERT INTO Workouts (trainee_id, coach_id, muscle_group, duration, week_day, message, description)
VALUES 
    (1, 1, 'Legs', 60, 'Monday', 'Remember to stretch', 'Squats, lunges, and calf raises'),
    (2, 1, 'Back and Biceps', 90, 'Tuesday', 'lat pulldowns', 'Rows, pull-ups, and curls');

INSERT INTO Exercises (muscle_type, excerice_name, rep_cout, set_count, workout_id)
VALUES
    ('Chest', 'Bench Press', 8, 3, 1),
    ('Back', 'Pull-ups', 10, 3, 2),
    ('Legs', 'Squats', 12, 4, 2),
    ('Biceps', 'Hammer Curls', 10, 3, 2),
    ('Triceps', 'Dips', 12, 4, 1);
    -- ('arms', 'bicep curls'),
    -- ('arms', 'tricep extensions'),
    -- ('arms', 'hammer curls'),
    -- ('arms', 'pushups'),
    -- ('abs', 'situps'),
    -- ('abs',	'planks'),
    -- ('abs',	'russian twists'),
    -- ('legs', 'squats'),
    -- ('legs', 'lunges'),
    -- ('legs', 'side lunges'),
    -- ('arms', 'pull ups'),
    -- ('arms', 'bench press'),
    -- ('arms', 'side lateral arm raises'),
    -- ('legs', 'goblet squat'),
    -- ('arms','tricep dip'),
    -- ('legs', 'sumo squat'),
    -- ('cardio', 'burpee')
    -- ('legs', 'single leg deadlift'),
    -- ('arms', 'bent-over row'),
    -- ('abs', 'crunch'),
    -- ('legs', 'deadlift'),
    -- ('legs', 'calf raises'),
    -- ('abs', 'bicycle crunches'),
    -- ('cardio', 'walking'),
    -- ('cardio', 'running'),
    -- ('abs', 'toe touches'),
    -- ('abs', 'dead bugs'),
    -- ('arms', 'tricep extensions');

INSERT INTO Foods (trainee_id, name, protein_amount, carbohidrate_amount, fat_amount, in_timestamp)
VALUES
    (1, 'chicken breast', 25.0, 0.0, 3.5, CURRENT_TIMESTAMP),
    (2, 'brown rice', 2.5, 45.0, 1.0, CURRENT_TIMESTAMP),
    (3, 'salmon', 22.0, 0.0, 8.0, CURRENT_TIMESTAMP);

INSERT INTO Messages (sender_id, reciever_id, content, sent_timestamp)
VALUES
    (1, 2, 'Hello, how are you?', CURRENT_TIMESTAMP),
    (2, 1, 'Doing well, thanks! How about you?', CURRENT_TIMESTAMP);

INSERT INTO Trainee_Workout_Plans (workout_id, trainee_id, coach_id, start_date, end_date)
VALUES
    (1, 1, 2, '2022-02-15 10:00:00', '2022-03-15 10:00:00');

INSERT INTO workout_exercises (workout_id, excersice_id, num_sets, num_reps)
VALUES
    (1, 1, 3, 10, 50),
    (1, 2, 3, 10, 50),
    (2, 3, 3, 12, 55),
    (2,  2, 3, 12, 70);
    -- (1, 1, 3, 8),
    -- (1, 5, 3, 15),
    -- (1, 8, 3, 10),
    -- (1, 17, 5, 20),
    -- (1, 20, 4, 30),
    -- (2, 2, 3, 8),
    -- (2, 6, 3, 1),
    -- (2, 14, 2, 8),
    -- (2, 21, 5, 3),
    -- (2, 24, 1, 1),
    -- (3, 3, 3, 8),
    -- (3, 6, 3, 1),
    -- (3, 13, 3, 10),
    -- (3, 25, 1, 1),
    -- (3, 27, 3, 15),
    -- (4, 4, 3, 20),
    -- (4, 9, 3, 16),
    -- (4, 11, 3, 10),
    -- (4, 16, 5, 3),
    -- (4, 23, 3, 30),
    -- (5, 7, 3, 50),
    -- (5, 10, 3, 12),
    -- (5, 15, 3, 15),
    -- (5, 21, 5, 3),
    -- (5, 26, 3, 20);
