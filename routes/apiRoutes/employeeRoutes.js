const express = require('express');
const router = express.Router();
const cTable = require('console.table');

const db = require('../../db/connection');


router.get('/employee', (req, res) => {
    const sql =  `id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL`;
//for above, it should be ROLE? and if so how do we designate role.manager

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


module.exports = router;
