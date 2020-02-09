## Spaced repetition capstone
This app allows uers to practice learning a language through the spaced repetition revision technique. Users can create an account and have access to a library of characters on the home dashboard.  Users can then practice by being shown a character and submit a guess.  They will then receive feedback with the total score and the correct and incorrect count for that character. The next wcharacters in sequence are determiend by the spaced repetition algorithm.

## Links
* Live Application: https://spaced-rep-osxir07o4.now.sh
* API Endpoint: https://vast-meadow-24481.herokuapp.com/api/
* Client repo: https://github.com/mntri4/spaced-rep
* Server repo: https://github.com/mntri4/spaced-rep-api

### Team: 
- Mario Martinez

## Project Description:

This is the backend API server for Thinkful's Spaced Repetition project.

The app aims to simulate flash card drills more effectively by automating the [Spaced Repetition](https://en.wikipedia.org/wiki/Spaced_repetition)   learning technique.  The app tracks the users performance history for each word, revisiting words which have proven to be more challenging for the use with a higher frequency.  The app utilizes user authorization, automatic log out on inactivity, data persistence, and score keeping.  

NOTE:  A data structure constraint was placed upon the team.  This constrained forbid the use of data structures other than [Linked Lists](https://en.wikipedia.org/wiki/Linked_list) for data mutation and management.

 ## Endpoints:
|  Endpoint   | Function |
|		--			  |		--	 	|
| GET /api/language | Assuming a valid JWT, returns status 200 along with the entirety of the 'language' and 'words' tables for the currently logged in user. |
| GET /api/language/head |  Assuming a valid JWT, returns status 200 along with the next word to be asked along with it's translation, correct and incorrect guess count for the associated word, as well as the user's total score.  |
|POST /api/language/guess | When 'guess' is submitted in the request body along with a valid JWT, returns status 200 along with both the untranslated and translated version of the submitted word, a boolean value for the submitted value's correctness, as well as an updated versions for the correct and incorrect guess count and the user's total score. |
| POST /api/auth/token  | When the submitted username and password validated returns a JWT that will expire in 20 minutes.  |
| PUT /api/auth/token | When submitted with a currently valid JWT, along with 'name', 'username', and 'user_id' in the request body, will return a fresh JWT. |
| POST /api/user  | When submitted with valid 'name', 'username', and 'password' fields in the request body, will return status 201 and the newly created 'user_id'.|

## User stories: 
The currently available language option in this app is morse corde.

## Team members:
Mario Martinez

## Front-end Stack
## Tech Stack
React
HTML5
CSS3

## Back-end Stack:

#### Host 
- Heroku
#### Tech
- Node.js
- Pg
- Knex
- Express
- Helmet
- Cors
- Morgan
- Jsonwebtoken
- Bcrypt.js
- Dotenv
- Nodemon (dev)
- Mocha (dev)
- Chai (dev)
- Supertest (dev)
- Postgrator-cli (dev)

## Running project
This project was created with `create-react-app`.  Run npm start to run in development mode and an npm install for the project dependencies.

## Screenshots
Login Screen/Landing Page:

![Login screen](screenshots/one.pdf)

Progress Screen

![Return Repetition](screenshots/two.pdf)

Learn Characters
[Learn screen](screenshots/three.pdf)

Error Screen
[Incorrect screen](screenshots/four.pdf)
