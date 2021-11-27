const Employee = require('../lib/Employee');

test('testing employee name', () => {
    const employee = new Employee('Jeramy');
    
    expect(employee.name).toBe('Jeramy');
})

test('testing employee ID', () => {
    const employee = new Employee('1234');
    
     
    expect(employee.id).toBe(expect.any(Number));
})

