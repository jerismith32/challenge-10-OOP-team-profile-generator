const Intern = require("../lib/Intern");
test('checks github is a string', () => {
    let jeri = new Intern ('Jeri', 123, 'jerismith32@gmail.com', 'Butler');
    expect(jeri.school).toEqual(expect.any(String));
})

test('functionality', () => {
    let jeri = new Intern ('Jeri', 123, 'jerismith32@gmail.com', 'Butler');
    expect(jeri.getSchool()).toBe('Butler');
    expect(jeri.getRole()).toBe('Intern');
})