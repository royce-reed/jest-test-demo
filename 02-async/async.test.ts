import fetchData from "./async";

// test the async function
describe("should return a promise", () => {
  it("should return a promise", () => {
    expect(fetchData(1)).toBeInstanceOf(Promise);
  });

  it("should return the correct todo", () => {
    const todo = fetchData(1).then(todo => {
      expect(todo.id).toBe(1);
    });
  });

  //* -- OR --
  // it("should return the correct todo", async () => {
  //   const todo = await fetchData(2);
  //   expect(todo.id).toBe(2);
  // });

});
