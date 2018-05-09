function produceDrivingRange(range) {
  return function (blockA, blockB) {
    let distance = Math.abs(parseInt(blockA) - parseInt(blockB));
    if (distance < range) {
      return `within range by ${range - distance}`;
    } else {
      return `${distance - range} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipRate) {
  return function(fare) {
    return fare * tipRate;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
