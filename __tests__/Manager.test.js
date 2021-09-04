const Manager = require('../lib/Manager');

beforeEach(() => {
    return manager = new Manager('Zach', 1, 'zachyarbro@gmail.com', 1234);
});

test('should have an office number', () => {
    expect(manager.officeNumber).toEqual(1234);
});

test('should return a string containing manager', () => {
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test('should return a string containing the office number property', () => {
    expect(manager.getSpecial()).toEqual(expect.stringContaining('1234'));
});