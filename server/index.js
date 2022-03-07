const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
  console.log('server is running on port 5000') 
});