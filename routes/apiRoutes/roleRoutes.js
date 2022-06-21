const express = require('express');
const router = express.Router();
const cTable = require('console.table');

const db = require('../../db/connection');

//get all roles
router.get('/role', (req, res) => {
  const sql = `SELECT role.*, department.name
  AS department_name
  FROM role
  LEFT JOIN department
  ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({
          message: 'success',
          data: rows
        });
      });
    });

//create a role
router.post('/role', ({ body }, res) => {

  const sql = `INSERT INTO role (title, salary, department)
  VALUES (?,?,?)`;
const params = [body.title, body.salary, body.department];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'Role added',
    data: body
  });
});
});

module.exports = router;
