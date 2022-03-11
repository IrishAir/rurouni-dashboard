const express = require("express");
const router = express.Router();
const pool = require('../db');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validinfo');
const authorize = require('../middleware/authorization');

//login
router.post("", validInfo, async(req, res) => {
  const { password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE password = $1", [password]);
    if(user.rows.length === 0) {
      return res.status(401).json("Password is incorrect");
    }
    let validPassword = false;
    if (password === user.rows[0].password) {
      validPassword = true;
    }
    if (!validPassword) {
      return res.status(401).json("Password is invalid");
    }
    const jwtToken = jwtGenerator(user.rows[0].id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;