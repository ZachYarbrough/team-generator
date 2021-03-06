const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return '<i class="fas fa-mug-hot"></i> Manager';
    }

    getSpecial() {
        return 'Office Number: ' + this.officeNumber;
    }
}

module.exports = Manager;