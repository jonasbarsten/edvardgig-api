export function calculateCost(product) {
  // const rate = storage <= 10
  //   ? 4
  //   : storage <= 100
  //     ? 2
  //     : 1;

  let rate = 0;

  switch(product) {
    case "SYNC":
      rate = 99;
      break;
    case "MIDI":
      rate = 49;
      break;
    case "dLive":
      rate = 29;
      break;
    default:
      rate = 0;
  }

  return rate * 100;
}