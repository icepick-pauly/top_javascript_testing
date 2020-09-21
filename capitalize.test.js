const capitalize = require('./capitalize');

test('takes hello and returns Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('takes hello world and returns Hello world', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});
