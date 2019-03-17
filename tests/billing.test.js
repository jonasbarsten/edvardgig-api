import { calculateCost } from "../libs/billing-lib";

test("SYNC", () => {
  const product = "SYNC";

  const cost = 9900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("MIDI", () => {
  const product = "MIDI";

  const cost = 4900;
  const expectedCost = calculateCost(product);

  expect(cost).toEqual(expectedCost);
});

test("SPD-SX", () => {
  const product = "SPD-SX";

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

test("VIDEO", () => {
  const product = "VIDEO";

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