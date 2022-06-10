const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require('console.table');
const Table = require('easy-table');
const apiRoutes = require('./routes/apiRoutes');
const department = require('./routes/apiRoutes/departmentRoutes');

//imports api routes
// const apiRoutes = require('./routes');
//imports connection.js
const db = require('./db/connection');
const inquirer = require('inquirer');

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//by adding /api prefix, we can remove it from the individual 
//route expressions after moving them to thier new js file
app.use('/api', apiRoutes);

 
inquirer.prompt ([
    {
        type:'list',
        name: 'mainMenu',
        choices: ['View all departments', 'View all roles', 'View all employees',]
    }
])
 
    .then((answer => {
        if (answer.mainMenu === 'View all departments') {
            return Table.data;
        }
    }));



//default response for any request not found. Must be last
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });