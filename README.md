# VE3
Task Manager web application
-
Basic tasks management web application

Technologies
-
HTML
CSS
Javascript
Express.js
Tailwind CSS
React
Mongodb
Redux
Node.js

Dependencies
-
react
react-dom
react-redux
react-router-dom
react-toastify
redux
redux-thunk
axios
bcrypt
dotenv
cors
jsonwebtoken
mongoose

Installation 
-
1.Install all the dependencies

npm install all

2.Add your Mongodbd_url to app.js file and also add your credentials to .eve file.

3.Start the application

npm run dev

4.Go to http://localhost:3000

Backend API
-

- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile

Inside client folder
-
npm start: Starts frontend in development mode
npm run build: Builds the frontend for production to the build folder
npm test: Launches the test runner in the interactive watch mode
npm run eject: This will remove the single build dependency from the frontend.

Inside parent folder
-
npm run dev: Starts backend using nodemon.
npm start: Starts backend without nodemon.






