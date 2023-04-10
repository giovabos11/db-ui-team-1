-- Create database
DROP DATABASE IF EXISTS DBUI;
CREATE DATABASE IF NOT EXISTS DBUI;
USE DBUI;

-- Reset tables
-- DROP TABLE IF EXISTS Users;
-- DROP TABLE IF EXISTS Trainees;
-- DROP TABLE IF EXISTS Coaches;
-- DROP TABLE IF EXISTS Workouts;
-- DROP TABLE IF EXISTS Exercises;
-- DROP TABLE IF EXISTS Foods;
-- DROP TABLE IF EXISTS Trainees;
-- DROP TABLE IF EXISTS Messages;
-- DROP TABLE IF EXISTS Trainees;
-- Reset relational tables
-- DROP TABLE IF EXISTS Trainee_Workout_Plans;

-- Create tables
CREATE TABLE IF NOT EXISTS Users(
    user_id int AUTO_INCREMENT UNIQUE,
  	email varchar(255) NOT NULL UNIQUE,
  	password varchar(255) NOT NULL,
  	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    age int NOT NULL,

	PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS Trainees(
	user_id int,
    height float,
  	weight float,
	-- coach_id int,
  	
  	FOREIGN KEY (user_id) REFERENCES Users(user_id)
	-- FOREIGN KEY (coach_id) REFERENCES Coaches(user_id)
);

CREATE TABLE IF NOT EXISTS Coaches(
	user_id int,
  	rating float,
  	
  	FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS Workouts(
	workout_id int AUTO_INCREMENT UNIQUE,
  	trainee_id int,
  	coach_id int,
  	muscle_group varchar(255),
  	duration int,
    week_day varchar(32),
    message varchar(1024),
    description varchar(1024),
  
  	PRIMARY KEY (workout_id),
  	FOREIGN key (trainee_id) REFERENCES Users(user_id),
  	FOREIGN KEY (coach_id) REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS Exercises(
	exercise_id int AUTO_INCREMENT,
  	muscle_type varchar(32) NOT NULL,
  	excerice_name varchar(255) NOT NULL,
  	-- rep_cout int,
    -- set_count int,
  
  	-- HOW TO RELATE WITH WORKOUTS???
  	PRIMARY KEY (exercise_id)
	
);

CREATE TABLE IF NOT EXISTS Foods(
	food_id int,
  	trainee_id int,
  	name varchar(255) NOT NULL,
  	protein_amount float NOT NULL DEFAULT 0,
  	carbohidrate_amount float NOT NULL DEFAULT 0,
  	fat_amount float NOT NULL DEFAULT 0,
  	in_timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  	PRIMARY KEY (food_id),
  	FOREIGN KEY (trainee_id) REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS Messages(
	message_id int,
  	sender_id int,
  	reciever_id int,
  	content varchar(1024) NOT NULL,
  	sent_timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  	PRIMARY KEY (message_id),
  	FOREIGN KEY (sender_id) REFERENCES Users(user_id),
  	FOREIGN KEY (reciever_id) REFERENCES Users(user_id)
);
-- Create relational tables
CREATE TABLE IF NOT EXISTS Trainee_Workout_Plans(
	workout_id int,
    trainee_id int,
  	coach_id int,
  	start_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	end_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  	FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id),
  	FOREIGN KEY (trainee_id) REFERENCES Users(user_id),
  	FOREIGN KEY (coach_id) REFERENCES Users(user_id)
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
-- INSERT INTO Users (email, password, first_name, last_name, age) 
-- VALUES ('gboscan@smu.edu', 'password', 'Giovanni', 'Boscan', 20);
INSERT INTO Users (email, password, first_name, last_name, age)
VALUES
  ('bobdylan@gmail.com', 'password123', 'bob', 'dylan', 25);

INSERT INTO Workouts (trainee_id, coach_id, duration, week_day)
VALUES 
    (1, 333, 1, 'Monday'),
    (2, 444, 0.75, 'Tuesday'),
    (3, 333, 1.25, 'Wednesday'),
    (4, 444, 1.25, 'Friday'),
    (5, 333, 0.75, 'Saturday');

INSERT INTO Exercises (muscle_group, name)
VALUES
    ('arms', 'bicep curls'),
    ('arms', 'tricep extensions'),
    ('arms', 'hammer curls'),
    ('arms', 'pushups'),
    ('abs', 'situps'),
    ('abs',	'planks'),
    ('abs',	'russian twists'),
    ('legs', 'squats'),
    ('legs', 'lunges'),
    ('legs', 'side lunges'),
    ('arms', 'pull ups'),
    ('arms', 'bench press'),
    ('arms', 'side lateral arm raises'),
    ('legs', 'goblet squat'),
    ('arms','tricep dip'),
    ('legs', 'sumo squat'),
    ('cardio', 'burpee')
    ('legs', 'single leg deadlift'),
    ('arms', 'bent-over row'),
    ('abs', 'crunch'),
    ('legs', 'deadlift'),
    ('legs', 'calf raises'),
    ('abs', 'bicycle crunches'),
    ('cardio', 'walking'),
    ('cardio', 'running'),
    ('abs', 'toe touches'),
    ('abs', 'dead bugs'),
    ('arms', 'tricep extensions');

INSERT INTO workout_exercises (workout_id, excersice_id, num_sets, num_reps)
VALUES 
    (1, 1, 3, 8),
    (1, 5, 3, 15),
    (1, 8, 3, 10),
    (1, 17, 5, 20),
    (1, 20, 4, 30),
    (2, 2, 3, 8),
    (2, 6, 3, 1),
    (2, 14, 2, 8),
    (2, 21, 5, 3),
    (2, 24, 1, 1),
    (3, 3, 3, 8),
    (3, 6, 3, 1),
    (3, 13, 3, 10),
    (3, 25, 1, 1),
    (3, 27, 3, 15),
    (4, 4, 3, 20),
    (4, 9, 3, 16),
    (4, 11, 3, 10),
    (4, 16, 5, 3),
    (4, 23, 3, 30),
    (5, 7, 3, 50),
    (5, 10, 3, 12),
    (5, 15, 3, 15),
    (5, 21, 5, 3),
    (5, 26, 3, 20);