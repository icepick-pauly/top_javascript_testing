const analyze = require('./analyze');

test('takes [2, 4, 6, 8, 10] and returns average: 6, min: 2, max: 10, length: 5', () => {
    expect(analyze([2, 4, 6, 8, 10])).toBe('Average: 6, Min: 2, Max: 10, Length: 5');
});
