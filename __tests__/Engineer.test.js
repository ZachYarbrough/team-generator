const Engineer = require('../lib/Engineer');

beforeEach(() => {
    return engineer = new Engineer('Zach', 1, 'zachyarbro@gmail.com', 'ZachYarbrough');
});

test('should have a github username', () => {
    expect(engineer.github).toBe('ZachYarbrough');
});

test('should return a string containing Engineer', () => {
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test('should return a string with the github property', () => {
    expect(engineer.getSpecial()).toEqual(expect.stringContaining('ZachYarbrough'));
});