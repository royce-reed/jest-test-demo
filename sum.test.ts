import sum from './sum';

//test the sum function
describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});