import { calculateCost } from "../libs/billing-lib";

test("SYNC", () => {
  const product = "SYNC";

  const cost = 9900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("SYNC extra license", () => {
  const product = "SYNC extra license";

  const cost = 1500;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("MIDI", () => {
  const product = "MIDI";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("MIDI extra license", () => {
  const product = "MIDI extra license";

  const cost = 900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("SPD-SX", () => {
  const product = "SPD-SX";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("SPD-SX extra license", () => {
  const product = "SPD-SX extra license";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("dLive", () => {
  const product = "dLive";

  const cost = 2900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("dLive extra license", () => {
  const product = "dLive extra license";

  const cost = 2900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("VIDEO", () => {
  const product = "VIDEO";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("VIDEO extra license", () => {
  const product = "VIDEO extra license";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("Program Change", () => {
  const product = "Program Change";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("Program Change extra license", () => {
  const product = "Program Change extra license";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});