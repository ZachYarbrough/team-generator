const Intern = require('../lib/Intern');

beforeEach(() => {
    return intern = new Intern('Zach', 1, 'zachyarbro@gmail.com', 'University of Texas');
})

test('should have a school', () => {
    expect(intern.school).toBe('University of Texas');
});

test('should return intern', () => {
    expect(intern.getRole()).toBe('Intern');
})