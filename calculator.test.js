const Calculator = require('./calculator');

test('divide 10 / 2 should be 5', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
});

test('divide 5 / 0 should throw error', () => {
    expect(() => Calculator.divide(5, 0)).toThrow('Cannot divide by zero');
});

test('multiply 5 * 2 should be 10', () => {
    expect(Calculator.multiply(5, 2)).toBe(10);
});

test('multiply 3 * 4 should be 12', () => {
    expect(Calculator.multiply(3, 4)).toBe(12);
});
