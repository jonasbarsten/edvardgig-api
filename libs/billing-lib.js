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
    case "SYNC extra license":
      rate = 15;
      break;
    case "MIDI":
      rate = 49;
      break;
    case "MIDI extra license":
      rate = 9;
      break;
    case "dLive":
      rate = 29;
      break;
    case "dLive extra license":
      rate = 29;
      break;
    case "VIDEO":
      rate = 49;
      break;
    case "VIDEO ekstra license":
      rate = 49;
      break;
    case "SPD-SX":
      rate = 49;
      break;
    case "SPD-SX ekstra license":
      rate = 49;
      break;
    case "Program Change":
      rate = 49;
      break;
    case "Program Change extra license":
      rate = 49;
      break;
    default:
      rate = 0;
  }

  return rate * 100;
}