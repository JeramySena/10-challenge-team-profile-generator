const Intern = require('../lib/Employee');

test('testing intern name', () => {
    const intern = new Intern('Jeramy');
    
    expect(intern.name).toBe('Jeramy');
})