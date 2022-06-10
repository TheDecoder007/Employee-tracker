//imports mysql2
const mysql = require('mysql2');

//Connect app to MySQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username, root is default
      user: 'root',
      // Your MySQL password
      password: 'DecodeThis!007',
      database: 'myEmployees'
    },
    console.log('Connected to the myEmployees database.')
  );


  module.exports = db;