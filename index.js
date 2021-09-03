const fs = require('fs');
const inquirer = require('inquirer');
const employeeArray = [];

function generateHTML() {
    fs.writeFile('./dist/index.html', team => {
        console.log(team);
    });
}

inquirer.prompt({
    
})