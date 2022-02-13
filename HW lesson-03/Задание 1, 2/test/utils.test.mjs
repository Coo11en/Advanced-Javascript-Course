const { pow } = require('../src/utils.js')

test('2 в степень 2 равно 4', () => {
    expect(pow(2, 2)).toBe(4);
});

test('2 в степень 0 равно 1', () => {
    expect(pow(2, 0)).toBe(1);
});

test('0 в степень 3 равно 0', () => {
    expect(pow(0, 3)).toBe(0);
});

test('0 в степень 0 равно 1', () => {
    expect(pow(0, 0)).toBe(1);
});

test('5 в степень -2 равно 0.04', () => {
    expect(pow(5, -2)).toBe(0.04);
});

test('-2 в степень 3 равно -8', () => {
    expect(pow(-2, 3)).toBe(-8);
});

test('-2 в степень -4 равно 0.0625', () => {
    expect(pow(-2, -4)).toBe(0.0625);
});

