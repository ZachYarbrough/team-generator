const Manager = require('../lib/Manager');

beforeEach(() => {
    return manager = new Manager('Zach', 1, 'zachyarbro@gmail.com', 1234);
})

test('should have an office number', () => {
    expect(manager.officeNumber).toEqual(1234);
});

test('should return manager', () => {
    expect(manager.getRole()).toBe('Manager');
})