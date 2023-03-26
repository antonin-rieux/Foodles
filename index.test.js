import test from ".";

test('Expect correct synthax to work', () => {
  const mockResult = [
    ['zblah', 3],
    ['bar', 2],
    ['baz', 2],
  ];
  expect(tt.test("baz bar foo foo zblah zblah zblah baz toto bar", 3)).toBe(mockResult);
});