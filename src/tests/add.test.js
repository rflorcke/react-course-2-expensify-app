const add = (a, b) => a + b;

const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
    const result = add(3, 4);
    if (result !== 7) {
        throw new Error(`You added 3 and 4. The result was ${result}. Expected 7`);
    }
});

// With assertion library
test("should add two numbers - assertion library", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test("Generate a greeting with provided name", () => {
    const greeting = generateGreeting("Mike");
    expect(greeting).toBe("Hello Mike!");
});
test("Generate a greeting with no provided name", () => {
    const greeting = generateGreeting();
    expect(greeting).toBe("Hello Anonymous!");
});
