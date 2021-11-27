const Engineer = require('../lib/Employee');

test('testing engineer name', () => {
    const engineer = new Engineer('Jeramy');
    
    expect(engineer.name).toBe('Jeramy');
})