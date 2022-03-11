const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === "production") {
  // server static content
  // npm run build
  app.use(express.static(path.join(__dirname, 'client/build')))
}

// show all records
app.get (['/calendar', '/'], async (req, res) => {
  try {
    const allRecords = await pool.query("SELECT * FROM records");
    res.json(allRecords.rows); 
  } catch (err) {
    console.error(err.message);
  }
});

// show all exercises
app.get (['/exercises', '/add_form'], async (req, res) => {
  try {
    const allExercises = await pool.query('SELECT id, name, primary_tag, secondary_tag FROM exercise');
    res.json(allExercises.rows); 
  } catch (err) {
    console.error(err.message);
  }
});

//get exercise
app.get ('/exercises/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getExercise = await pool.query("SELECT * FROM exercise WHERE id = $1", [id]);
    res.json(getExercise.rows[0]); 
    
  } catch (err) {
    console.error(err.message);  
  }
});

// post records
app.post('/add_form', async (req, res) => {
  try {
    const { date, title, value } = req.body;  
    const newValues = await pool.query(
      "INSERT INTO records (day, title, value) VALUES($1, $2, $3) RETURNING *", [date, title, value]);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
 
// update exercises weights
  try {
    const { exercises } = req.body;  
    exercises.map(async (exercise) => {
      const newValues = await pool.query(
        "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [exercise[1], exercise[0]]);     
      res.json(newValues.rows[0]);})
    } catch (err) {
    console.error(err.message);
  }

  // update personal records
  try {
    const newValues = await pool.query(
      "UPDATE exercise SET personal_record =  CASE WHEN weight > personal_record THEN weight ELSE personal_record END");
    res.json(newValues.rows[0]);  
  } catch (err) {
    console.error(err.message);
  }
   
//update exercises history
  try {
    const { date, exercises } = req.body;  
    exercises.map(async (exercise) => {
      const newValues = await pool.query(
        `UPDATE exercise
        SET history = history::jsonb || '{"date": "${date}", "weight": ${exercise[1]}}'::jsonb
        WHERE id = ${exercise[0]}`);     
      res.json(newValues.rows[0]);})
    } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`); 
});