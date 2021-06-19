const Employee = require('../lib/Employee');

test('checks to make sure name, id, and email are strings', () => {
    let jeri = new Employee ('Jeri', 123, 'jerismith32@gmail.com');
    expect(jeri.name).toEqual(expect.any(String));
    expect(jeri.id).toEqual(expect.any(Number));
    expect(jeri.email).toEqual(expect.any(String));
})

test('Testing Functionality of getName, Id, Email, Role', () => {
    let jeri = new Employee ('Jeri', 123, 'jerismith32@gmail.com');
    expect(jeri.getName()).toBe('Jeri');
    expect(jeri.getId()).toBe(123);
    expect(jeri.getEmail()).toBe('jerismith32@gmail.com');
    expect(jeri.getRole()).toBe('Employee')
})