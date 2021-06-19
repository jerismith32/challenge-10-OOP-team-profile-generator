const Manager = require("../lib/Manager");
test('checks github is a string', () => {
    let jeri = new Manager ('Jeri', 123, 'jerismith32@gmail.com', '765-3');
    expect(jeri.officeNumber).toEqual(expect.any(String));
})

test('functionality', () => {
    let jeri = new Manager ('Jeri', 123, 'jerismith32@gmail.com', '765-3');
    expect(jeri.getOfficeNumber()).toBe('765-3');
    expect(jeri.getRole()).toBe('Manager');
})