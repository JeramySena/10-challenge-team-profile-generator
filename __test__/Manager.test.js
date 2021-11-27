const Manager = require('../lib/Employee');

test('testing manager name', () => {
    const manager = new Manager('Jeramy');
    
    expect(manager.name).toBe('Jeramy');
})