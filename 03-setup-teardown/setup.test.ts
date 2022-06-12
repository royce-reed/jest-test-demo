// create array of animals names
let animals: any = [];

beforeEach(() => {
  animals = ['cat', 'dog', 'bird'];
});
// other options: afterEach, BeforeAll, AfterAll

describe('animals array', () => {
  // if you want beforeEach to run for only tests in this describe block, insert it here 

  it('should add animal to end of array', () => {
    animals.push('fish');
    expect(animals[animals.length -1]).toBe('fish');
  });

  it('should add animal to beginning of array', () => {
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });

  it('should have an initial length of 3', () => {
    expect(animals.length).toBe(3);
  });
});

xdescribe('test', () => {
  it.only('truth should be thuthy', () => {
    expect(true).toBeTruthy();
  })
});

