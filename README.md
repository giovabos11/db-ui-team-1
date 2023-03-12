# **db-ui-team-1**

Workout planner and fitness app.

# How to start

Before making your contributions, whether for the frontend or the backend, you need to have this repository stored in your computer.
(Make sure you have [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/) installed)

-   Navigate to your prefered directory, run the following command:

```sh
git clone https://github.com/kassi-bertrand/db-ui-team-2.git
```

## Frontend

If you're on the UI part of the team:

1. Get into the repository's directory:

```sh
cd db-ui-team-2
```

2. Get into the frontend's directory:

```sh
cd frontend
```

3. Run the following command, to download the required packages on your local machine:

```sh
npm install
```

4. Lastly, run the following command to launch the application in your browser:

```sh
npm run start
```

## Backend

If you're on the DB part of the team (make sure to have [MySQL](https://dev.mysql.com/downloads/mysql/) installed):

1. Get into the repository's directory:

```sh
cd db-ui-team-2
```

2. Get into the backend's directory:

```sh
cd backend
```

3. Run the following command, to download the required packages on your local machine:

```sh
npm install
```

4. Lastly, run the following command to launch the application in your browser:

```sh
npm run dev
```

# ENV flie setup

Create a file in the `./frontend` folder called `.env` and add the the following to it (if it is not already there):

```
CHOKIDAR_USEPOLLING=true
```

Create a file in the `./backend` folder called `.env` and add the the following to it:

```
# POPULATE WITH YOUR OWN VALUES SPECIFIED IN DATABASE CREATION!
# mysql database name
MYSQL_DB=
# mysql port (usually 3306)
MYSQL_PORT=
# mysql cloud database login user
MYSQL_CLOUD_USER=
# mysql cloud database login password
MYSQL_CLOUD_PASS=
# mysql cloud database host URL
MYSQL_CLOUD_HOST=
```

_Note: You will need to share the values in this `.env` file in the backend folder with your team members, it is not recommended you push this file to your GitHub repo as it may expose your secrets to the world!_

# Contributing

As the best always come from team efforts, contributions are welcomed ❤️! The following guide describes guidelines and processes explained by TA [Hayden Center](https://github.com/HaydenCenter) to follow throughout the semester when interacting with this codebase, for consistency-purposes. The following document is also meant to serve as a reference for team, moving forward.

## Implementing Issues

As you know, the project is spread over the course of five (5) sprints. Each sprint has a target number of user stories to implement. For clarity purposes, _each sprint have its own **dedicated** branch_. For instance, the Sprint 1 branch is named `sprint_1`, and Sprint 2 will be named `sprint_2`, etc...

So, to implement an issue (i.e. user story), on your local machine, please make sure:

1. **ALWAYS make sure that you are up to date**, using the following command:

```sh
git pull
```

2. **To be on the correct branch**, using the following command:

```sh
git switch sprint_n
```

_Note: If the branch does not exit yet, please create one, following this format: `sprint_n`, where `n` is the sprint number. To do so, run: `git checkout main`, then, create the new sprint branch with `git checkout -b sprint_n`, and lastly, push the branch to GitHub with the command `git push`_

3. **Create new feature branch off of the sprint branch you're currently on**. On this branch you'll implement the user story, following this format: `user_story_nnnn`, where `n` is the user story number. Follow these commands to do so:

```sh
git checkout sprint_n
```

```sh
git checkout -b user_story_nnnn
```

```sh
git push
```

## Submitting pull requests

What happens when you're done implementing a feature? You have to merge your user story branch into the sprint branch. Follow these steps to do so:

1. **Make sure you are in the user story branch you want to merge**, with:

```sh
git checkout user_story_nnnn
```

2. **Merge the sprint branch into your feature branch**, with:

```sh
git merge sprint_n
```

_Note: This will make sure you have the latest changes, if any. If you have no merge conflicts, move to step 3. If so, solve them before moving on._

3. **Create a pull request** to signal the team that you are ready to merge your new feature into the sprint branch. Go to the Issues page of the repository on GitHub and create a pull request on the respective user story issue.

4. **Merge your changes into the sprint branch**, by clicking the Merge button and wait for the approval. Congratulations, you just implemented a new feature!

_Note: Never merge buggy, or unfinished features into the sprint or main branches!_
