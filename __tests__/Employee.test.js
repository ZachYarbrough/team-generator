const { expect, test, beforeEach } = require('@jest/globals');
const Employee = require('../lib/Employee');

beforeEach(() => {
    return employee = new Employee('Zach', 1, 'zachyarbro@gmail.com');
});

test('should create an empty Employee', () => {
    const employee = new Employee();

    expect(employee.name).toBe(undefined);
    expect(employee.email).toBe(undefined);
});

test('should create an Employee', () => {
    expect(employee.name).toBe('Zach');
    expect(employee.email).toBe('zachyarbro@gmail.com');
});

test('should return the name of the Employee', () => {
    expect(employee.getName()).toBe('Zach');
});

test('should return the id of the Employee', () => {
    expect(employee.getId()).toEqual(1);

    const employee2 = new Employee('Bob', 2, 'bob@gmail.com');

    expect(employee2.getId()).toEqual(2);

});

test('should return the email of the Employee', () => {
    expect(employee.getEmail()).toBe('zachyarbro@gmail.com');
});