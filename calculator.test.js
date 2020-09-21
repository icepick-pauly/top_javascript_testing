const calculator = require('./calculator');

test('takes 6 + 2 and returns 8', () => {
    expect(calculator.add(6, 2)).toBe(8);
});

test('takes 6 - 2 and returns 4', () => {
    expect(calculator.subtract(6, 2)).toBe(4);
});

test('takes 6 / 2 and returns 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('takes 6 * 2 and returns 12', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
});