function sum(a, b) {
  return a + b;
}

describe("group name", () => {
  it.skip("my first test", () => {
    //write the code here for testing
    let result = sum(10, 20);
    expect(result).toBe(30);
    const data = { one: 1 };
    data["two"] = 2;

    // expect(data).toHaveProperty("one");
    // //undfined
    // expect(data).toBeUndefined();
    expect(10).toBeGreaterThan(8);
    expect([1, 2, 3]).toContain(1);

    // expect().toThrow()

    expect("urvashi").toEqual("urvashi");
  });

  test.skip("Name", () => {});

  test.skip("todo test", () => {});
});
