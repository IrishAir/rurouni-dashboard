# PERN Workouts Dashboard
An application made for tracking fitness progress that includes chart for every exercise, authentication and calendar heatmap.

## Demo
Deployed on Heroku — [rurouni-dashboard](https://rurouni-dashboard.herokuapp.com/)

##  General info
The PERN stack: [PostgresSQL](https://www.postgresql.org/), [Express](https://expressjs.com/), [React](https://reactjs.org/) and [Node](https://nodejs.org/en/)

 - [recharts](https://recharts.org/en-US/)  - charting library built on React components
 - [nivo/calendar](https://nivo.rocks/calendar/)  - data visualization component built on top of D3.js
 - [date-fns](https://date-fns.org/)  - library for formatting dates
 - [jwt](https://jwt.io/)  - A standard to secure/authenticate HTTP requests
 
 ## Features
 
 - All data stored in PostgreSQL database
 - Data driven calendar heatmap
 - Stats for each exercise and for general progress (such as last visit date or personal record)
 - Dynamic search
 - Progress chart for every exercise
 - Workouts history section
 - Authentication using jsonwebtoken
 - Authorized users get access to the admin panel
