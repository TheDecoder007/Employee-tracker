const express = require('express');
const router = express.Router();
const cTable = require('console.table');

const db = require('../../db/connection');

//API end point (route) to display all departments
router.get('/department', (req, res) => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'All Departments',
      data: rows
    });
  });
});

router.post('/department', ({ body }, res) => {

  const sql = `INSERT INTO department (department_name)
  VALUES ()`;
const params = [body.department_name];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'Department added',
    data: body
  });
});
});

  module.exports = router;