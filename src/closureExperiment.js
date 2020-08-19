'use strict';

const beginningRangeNumber = 6;
const endingRangeNumber = 10;

function closureExperiment() {

  const startRange = range(beginningRangeNumber)

  document.getElementById('closureExperiment').innerHTML = 
    `
      <p>
        Range array from ${beginningRangeNumber} to ${endingRangeNumber} : [${startRange(endingRangeNumber)}] 
      </p>
    `;
}

closureExperiment();


function range(start) {
  return function(end) {
    let range = [];

    while(start <= end) {
      range = [...range, start];
      start++;
    }

    return range;
  }
}