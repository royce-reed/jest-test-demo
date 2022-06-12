import sum from './sum';

//test the sum function
describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  it('should be greater than or equal to 5', () => {
    const result = sum(3, 2);
    expect(result).toBeGreaterThanOrEqual(5);
  });

});