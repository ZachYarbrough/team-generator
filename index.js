const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];


function generateHTML(formattedTeam) {
    let teamHTML = ''
    for(let i = 0; i < formattedTeam.length; i++) {
        teamHTML += `<div>
        <div class="employee-header">
            <h2>${formattedTeam[i].getName()}</h2>
            <h3>${formattedTeam[i].getRole()}</h3>
        </div>
        <div class="employee-content">
            <h3>${formattedTeam[i].getId()}</h3>
            <h3>${formattedTeam[i].getEmail()}</h3>
            <h3>${formattedTeam[i].getSpecial()}</h3>
        </div>         
    </div>
    `
    }
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <title>Team Generator</title>
    </head>
    <body>
        <div class="header">
            <h1 class="title">My Team<h1>
        </div>
        <div class="employee-container>
            ${teamHTML}
        </div>    
    </body>
    </html>`
    fs.writeFile('./dist/index.html', html, err => {
        if(err) throw err;
    });
}

function promptNewEmployee() {
    inquirer.prompt({
        type: "list",
        name: 'newEmployee',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Intern', 'No thanks']
    }).then(data => {
        switch (data.newEmployee) {
            case 'Engineer':
                createNewEngineer();
                break;
            case 'Intern':
                createNewIntern();
                break;
            case 'No thanks':
                console.log('Generating HTML...');
                generateHTML(employeeArray);
        }
    })
}

function createNewManager() {
    inquirer.prompt([{
        type: 'text',
        name: "name",
        message: "What is the name of your team manager?"
    }, {
        type: "text",
        name: "id",
        message: "What is their employee ID?"
    }, {
        type: "text",
        name: "email",
        message: "What is their email address?"
    }, {
        type: "text",
        name: "officeNumber",
        message: "What is their office number?"
    }]).then(manager => {
        employeeArray.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
        promptNewEmployee();  
    })
}

function createNewEngineer() {
    inquirer.prompt([{
        type: 'text',
        name: "name",
        message: "What is the name of your engineer?"
    }, {
        type: "text",
        name: "id",
        message: "What is their employee ID?"
    }, {
        type: "text",
        name: "email",
        message: "What is their email address?"
    }, {
        type: "text",
        name: "github",
        message: "What is their github username?"
    }]).then(engineer => {
        employeeArray.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github));
        promptNewEmployee();  
    })
}

function createNewIntern() {
    inquirer.prompt([{
        type: 'text',
        name: "name",
        message: "What is the name of your intern?"
    }, {
        type: "text",
        name: "id",
        message: "What is their employee ID?"
    }, {
        type: "text",
        name: "email",
        message: "What is their email address?"
    }, {
        type: "text",
        name: "school",
        message: "What is school do they attend?"
    }]).then(intern => {
        employeeArray.push(new Intern(intern.name, intern.id, intern.email, intern.school));
        promptNewEmployee();
    })
}

createNewManager();