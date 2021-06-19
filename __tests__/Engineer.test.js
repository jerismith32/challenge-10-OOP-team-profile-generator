const Engineer = require("../lib/Engineer");
test('checks github is a string', () => {
    let jeri = new Engineer ('Jeri', 123, 'jerismith32@gmail.com', 'jerismith32');
    expect(jeri.github).toEqual(expect.any(String));
})

test('functionality', () => {
    let jeri = new Engineer ('Jeri', 123, 'jerismith32@gmail.com', 'jerismith32');
    expect(jeri.getGithub()).toBe('jerismith32');
    expect(jeri.getRole()).toBe('Engineer');
})