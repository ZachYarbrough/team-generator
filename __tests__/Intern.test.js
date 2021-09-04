const Intern = require('../lib/Intern');

beforeEach(() => {
    return intern = new Intern('Zach', 1, 'zachyarbro@gmail.com', 'University of Texas');
});

test('should have a school', () => {
    expect(intern.school).toBe('University of Texas');
});

test('should return a string containg intern', () => {
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test('should return a string containing the school property', () => {
    expect(intern.getSpecial()).toEqual(expect.stringContaining('University of Texas'));
});