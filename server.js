const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require("inquirer");
const router = express.Router();
const apiRoutes = require("./routes/apiRoutes");
const department = require("./routes/apiRoutes/departmentRoutes");
const role = require("./routes/apiRoutes/roleRoutes");
const employee = require("./routes/apiRoutes/employeeRoutes");

//imports connection.js
const db = require("./db/connection");

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//by adding /api prefix, we can remove it from the individual
//route expressions after moving them to thier new js file
app.use("/api", apiRoutes);

const promptMain = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])

    .then((answers) => {
      if (answers.mainMenu === "View all departments") {
        const sql = `SELECT * FROM department`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log
            return;
          }
          console.table(rows);
          promptMain()
        });
      } else if (answers.mainMenu === "View all roles") {
        const sql = `SELECT * FROM role`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log
            return;
          }
          console.table(rows);
          promptMain()
        });
      } else if (answers.mainMenu === "View all employees") {
        const sql = `SELECT * FROM employee`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log
            return;
          }
          console.table(rows);
          promptMain()
        });
      } else if (answers.mainMenu === "Add a department") {
        addDepartment();
      } else if (answers.mainMenu === "Add a role") {
        addRole();
      } else if (answers.mainMenu === "Add an employee") {
        addEmployee();
      }
      // else if (answers.mainMenu === 'Update an employee role') {
      //    updateRole();
      // }
    });
};
const addDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What is the name of the department?",
      },
    ])
    .then((answer) => {
      answer.departmentName = department.department_name;
      console.log(department.department_name);
      console.log("Department added");
      promptMain();
    });
};

const addRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "What is the name of the role?",
      },
      {
        type: "number",
        name: "roleSalary",
        message: "What is the salary for this role?",
      },
      {
        type: "input",
        name: "roleDepartment",
        message: "What department is this role under?",
      },
    ])
    .then(promptMain);
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employees first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employees last name?",
      },
      {
        type: "input",
        name: "employeeRole",
        message: "What is this employees role?",
      },
      {
        type: "input",
        name: "employeeManager",
        message: "Who is this employees manager?",
      },
    ])
    .then(promptMain);
};

promptMain();

//default response for any request not found. Must be last
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
