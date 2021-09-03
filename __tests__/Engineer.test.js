const Engineer = require('../lib/Engineer');

beforeEach(() => {
    return engineer = new Engineer('Zach', 1, 'zachyarbro@gmail.com', 'ZachYarbrough');
})

test('should have a github username', () => {
    expect(engineer.github).toBe('ZachYarbrough');
});

test('should return engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
})