-- Create database
-- CREATE DATABASE IF NOT EXISTS DBUI;
-- USE DBUI;
-- Reset tables
DROP TABLE IF EXISTS Workout_Users;
DROP TABLE IF EXISTS Workout_Exercises;
DROP TABLE IF EXISTS Messages;
DROP TABLE IF EXISTS Foods;
DROP TABLE IF EXISTS Exercises;
DROP TABLE IF EXISTS Workouts;
DROP TABLE IF EXISTS Trainees;
DROP TABLE IF EXISTS Coaches;
DROP TABLE IF EXISTS Users;
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
    user_id int,
    rating float,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
CREATE TABLE IF NOT EXISTS Trainees(
    user_id int,
    height float,
    weight float,
    coach_id int,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
CREATE TABLE IF NOT EXISTS Workouts(
    workout_id int AUTO_INCREMENT PRIMARY KEY,
    trainee_id int,
    coach_id int,
    muscle_group varchar(255),
    duration int,
    week_day varchar(32),
    description varchar(1024),
    FOREIGN KEY (trainee_id) REFERENCES Trainees(user_id),
    FOREIGN KEY (coach_id) REFERENCES Coaches(user_id)
);
CREATE TABLE IF NOT EXISTS Exercises(
    exercise_id int AUTO_INCREMENT PRIMARY KEY,
    muscle_type varchar(32) NOT NULL,
    excerice_name varchar(255) NOT NULL,
    workout_id INT,
    FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id)
);
CREATE TABLE IF NOT EXISTS Foods(
    food_id int AUTO_INCREMENT PRIMARY KEY,
    trainee_id int,
    name varchar(255) NOT NULL,
    protein_amount float NOT NULL DEFAULT 0,
    carbohidrate_amount float NOT NULL DEFAULT 0,
    fat_amount float NOT NULL DEFAULT 0,
    in_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (trainee_id) REFERENCES Trainees(user_id)
);
CREATE TABLE IF NOT EXISTS Messages(
    message_id int AUTO_INCREMENT PRIMARY KEY,
    sender_id int,
    reciever_id int,
    content varchar(1024) NOT NULL,
    sent_timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES Coaches(user_id),
    FOREIGN KEY (reciever_id) REFERENCES Trainees(user_id)
);
-- Create relational tables
CREATE TABLE IF NOT EXISTS Workout_Users(
    workout_id int,
    trainee_id int,
    coach_id int,
    start_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id),
    FOREIGN KEY (trainee_id) REFERENCES Trainees(user_id),
    FOREIGN KEY (coach_id) REFERENCES Coaches(user_id)
);
CREATE TABLE IF NOT EXISTS Workout_Exercises (
    workout_id int,
    exercise_id int,
    num_sets INT NOT NULL DEFAULT 4,
    num_reps INT NOT NULL DEFAULT 10,
    weight INT NOT NULL DEFAULT 0,
    FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id),
    FOREIGN KEY (exercise_id) REFERENCES Exercises(exercise_id)
);
-- Populate tables
INSERT INTO Users (email, password, first_name, last_name, age)
VALUES (
        'bobdylan@gmail.com',
        'password123',
        'bob',
        'dylan',
        25
    ),
    (
        'johndoe@example.com',
        'password123',
        'John',
        'Doe',
        25
    ),
    (
        'janedoe@example.com',
        'password456',
        'Jane',
        'Doe',
        30
    ),
    (
        'bobsmith@example.com',
        'password789',
        'Bob',
        'Smith',
        40
    );
INSERT INTO Coaches (user_id, rating)
VALUES (
        (
            select user_id
            from Users
            where user_id = 1
        ),
        3
    ),
    (
        (
            select user_id
            from Users
            where user_id = 2
        ),
        5
    );
INSERT INTO Trainees (user_id, height, weight, coach_id)
VALUES (
        (
            select user_id
            from Users
            where user_id = 3
        ),
        5.6,
        150,
        (
            select user_id
            from Coaches
            where rating = 5
        )
    ),
    (
        (
            select user_id
            from Users
            where user_id = 4
        ),
        6.1,
        175,
        (
            select user_id
            from Coaches
            where rating = 3
        )
    );
INSERT INTO Workouts (
        trainee_id,
        coach_id,
        muscle_group,
        duration,
        week_day,
        description
    )
VALUES (
        (
            select user_id
            from Trainees
            where user_id = 3
        ),
        (
            select user_id
            from Coaches
            where user_id = 1
        ),
        'Legs',
        60,
        'Monday',
        'Squats, lunges, and calf raises'
    ),
    (
        (
            select user_id
            from Trainees
            where user_id = 4
        ),
        (
            select user_id
            from Coaches
            where user_id = 1
        ),
        'Back and Biceps',
        90,
        'Tuesday',
        'Rows, pull-ups, and curls'
    );
INSERT INTO Exercises (muscle_type, excerice_name, workout_id)
VALUES ('Chest', 'Bench Press', 1),
    ('Back', 'Pull-ups', 2),
    ('Legs', 'Squats', 2),
    ('Biceps', 'Hammer Curls', 2),
    ('Triceps', 'Dips', 1);
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
INSERT INTO Foods (
        trainee_id,
        name,
        protein_amount,
        carbohidrate_amount,
        fat_amount,
        in_timestamp
    )
VALUES (
        (
            select user_id
            from Trainees
            where user_id = 4
        ),
        'chicken breast',
        25.0,
        0.0,
        3.5,
        CURRENT_TIMESTAMP
    ),
    (
        (
            select user_id
            from Trainees
            where user_id = 3
        ),
        'brown rice',
        2.5,
        45.0,
        1.0,
        CURRENT_TIMESTAMP
    ),
    (
        (
            select user_id
            from Trainees
            where user_id = 3
        ),
        'salmon',
        22.0,
        0.0,
        8.0,
        CURRENT_TIMESTAMP
    );
INSERT INTO Messages (sender_id, reciever_id, content, sent_timestamp)
VALUES (
        (
            select user_id
            from Coaches
            where user_id = 1
        ),
        (
            select user_id
            from Trainees
            where user_id = 2
        ),
        'Hello, how are you?',
        CURRENT_TIMESTAMP
    ),
    (
        (
            select user_id
            from Coaches
            where user_id = 2
        ),
        (
            select user_id
            from Trainees
            where user_id = 1
        ),
        'Hope you are killing those reps!',
        CURRENT_TIMESTAMP
    );
INSERT INTO Workout_Users (
        workout_id,
        trainee_id,
        coach_id,
        start_date,
        end_date
    )
VALUES (
        1,
        (
            select user_id
            from Trainees
            where user_id = 4
        ),
        NULL,
        '2022-02-15 10:00:00',
        '2022-03-15 10:00:00'
    ),
    (
        2,
        NULL,
        (
            select user_id
            from Coaches
            where user_id = 2
        ),
        '2022-02-15 10:00:00',
        '2022-03-15 10:00:00'
    );
INSERT INTO Workout_Exercises (workout_id, exercise_id)
VALUES (1, 1),
    (1, 2),
    (2, 3),
    (2, 2);
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