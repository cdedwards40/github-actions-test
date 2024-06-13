const greet = require("./greet");

describe("test Greet()", function () {
  it("null name", function () {
    expect(greet()).toBe("Hello there!");
  });
  it("regular name", function () {
    expect(greet("Elizabeth")).toBe("Hello, Elizabeth");
  });
  it("shouting", function () {
    expect(greet("JOSE")).toBe("HELLO JOSE!");
  });
  it("array of two names", function () {
    expect(greet(["Jose", "Pep"])).toBe("Hello, Jose, Pep");
  });
  it("array of multiple names", function () {
    expect(greet(["Alex", "Arsene", "Jose", "Zidane"])).toBe(
      "Hello, Alex, Arsene, Jose, Zidane"
    );
  });
});
