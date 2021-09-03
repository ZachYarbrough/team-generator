const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];

function generateHTML() {
    fs.writeFile('./dist/index.html', team => {
        console.log(team);
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
                console.log(employeeArray);
                console.log('Generating HTML...');
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