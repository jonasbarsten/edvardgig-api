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