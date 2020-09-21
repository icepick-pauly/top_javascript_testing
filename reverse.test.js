const reverse = require('./reverse');

test('takes hello and returns olleh', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('takes hello world and returns dlrow olleh', () => {
    expect(reverse('hello world')).toBe('dlrow olleh');
});
