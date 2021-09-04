const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];


function generateHTML(team) {

    let teamHTML = '';

    team.forEach(employee => {
        teamHTML += `
        <div class="col-4 d-flex flex-column mb-3">
            <div class="bg-primary text-white shadow p-3">
                <h2>${employee.getName()}</h2>
                <h3>${employee.getRole()}</h3>
            </div>
            <div class="bg-light shadow p-3">
                <h4 class="bg-white p-3 mb-3">ID: ${employee.getId()}</h4>
                <h4 class="bg-white p-3 mb-3">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></h4>
                <h4 class="bg-white p-3 mb-3">${employee.getSpecial()}</h4>
            </div>
        </div>`
    });

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
    </head>
    <body>
    <div class="container">
    <h1 class="mt-3 d-flex align-items-center justify-content-center p-5 bg-danger text-white">
        My Team
    </h1>
    <div class="row mt-5 d-flex justify-content-center">
        ${teamHTML}
    </div>
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
        message: "What school do they attend?"
    }]).then(intern => {
        employeeArray.push(new Intern(intern.name, intern.id, intern.email, intern.school));
        promptNewEmployee();
    })
}

createNewManager();