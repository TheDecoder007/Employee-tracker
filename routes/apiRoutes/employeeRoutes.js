const express = require('express');
const router = express.Router();
const cTable = require('console.table');

const db = require('../../db/connection');


router.get('/employee', (req, res) => {
  const sql = `SELECT employee.*, department.name, role.title, role.salary
  
  FROM employee
  LEFT JOIN role
  ON employee.role_id = role.id
  LEFT JOIN department
  ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({
          message: 'All Employees',
          data: rows
        });
      });
    });

    router.post('/employee', ({ body }, res) => {
   
      const sql = `INSERT INTO employee (first_name, last_name, role)
      VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.role];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'Employee added',
        data: body
      });
    });
    });


module.exports = router;
