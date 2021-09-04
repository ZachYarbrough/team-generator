const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return '<i class="fas fa-user-graduate"></i> Intern';
    }

    getSpecial() {
        return 'School: ' + this.school;
    }
}

module.exports = Intern;