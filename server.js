const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require('console.table');

//imports api routes
const apiRoutes = require('./routes');
//imports connection.js
const db = require('./db/connection');

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//by adding /api prefix, we can remove it from the individual 
//route expressions after moving them to thier new js file
app.use('/api', apiRoutes);



//default response for any request not found
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });