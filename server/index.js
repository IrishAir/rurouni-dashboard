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
 
// update exercises weight
  try {
    const { firstWeight, firstId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [firstWeight, firstId]);     
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { secondWeight, secondId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [secondWeight, secondId]);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { thirdWeight, thirdId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [thirdWeight, thirdId]);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { fourthWeight, fourthId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [fourthWeight, fourthId]);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { fifthWeight, fifthId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [fifthWeight, fifthId]);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { sixthWeight, sixthId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [sixthWeight, sixthId]);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { seventhWeight, seventhId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [seventhWeight, seventhId]);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { eigthWeight, eigthId } = req.body;  
    const newValues = await pool.query(
      "UPDATE exercise SET weight = $1 WHERE id = $2 RETURNING *", [eigthWeight, eigthId]);
    res.json(newValues.rows[0]);
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
    const { date, firstWeight, firstId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${firstWeight}"}'::jsonb
      WHERE id = ${firstId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { date, secondWeight, secondId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${secondWeight}"}'::jsonb
      WHERE id = ${secondId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { date, thirdWeight, thirdId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${thirdWeight}"}'::jsonb
      WHERE id = ${thirdId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { date, fourthWeight, fourthId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${fourthWeight}"}'::jsonb
      WHERE id = ${fourthId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { date, fifthWeight, fifthId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${fifthWeight}"}'::jsonb
      WHERE id = ${fifthId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { date, sixthWeight, sixthId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${sixthWeight}"}'::jsonb
      WHERE id = ${sixthId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { date, seventhWeight, seventhId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${seventhWeight}"}'::jsonb
      WHERE id = ${seventhId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  try {
    const { date, eigthWeight, eigthId } = req.body;  
    const newValues = await pool.query(
      `UPDATE exercise 
      SET history = history::jsonb || '{"date": "${date}", "weight": "${eigthWeight}"}'::jsonb
      WHERE id = ${eigthId}`);
    res.json(newValues.rows[0]);
  } catch (err) {
    console.error(err.message);
  } 
});

app.listen(5000, () => {
  console.log('server is running on port 5000') 
});