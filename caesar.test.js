const caesar = require('./caesar');

test('takes paul, 3 and returns sdxo', () => {
    expect(caesar('paul', 3)).toBe('SDXO');
});

test('takes Hello, 7 and returns sdxo', () => {
    expect(caesar('hello', 7)).toBe('OLSSV');
});