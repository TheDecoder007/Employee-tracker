const express = require('express');
const router = express.Router();
const cTable = require('console.table');

const db = require('../../db/connection');

router.get('/department', (req, res) => {
    const sql =  `id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL`;
  

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