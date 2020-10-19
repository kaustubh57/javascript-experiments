

let sampleArray = [1, 2, 3, 4, 5, 8];
let sum = 9;

function findPair(array, sum) {

    let startIndex = 0;
    let lastIndex = array.length - 1;

    while(startIndex < lastIndex) {
        const valueToCompare = array[startIndex] + array[lastIndex];
        if (sum === valueToCompare) {
            return true;
        } else if (valueToCompare < sum) {
            startIndex++;
        } else if (valueToCompare > sum) {
            lastIndex--;
        }
    }

    return false;
}


function findPair2(array, sum) {
    let sampleSet = new Set();
    for (let i = 0; i < array.length; i++) {
        if (sampleSet.has(sum - array[i])) {
            return true;
        }

        sampleSet.add(array[i]);
    }

    return false;
}


function findPairRender() {
    document.getElementById('findPair').innerHTML = 
    `
    <p>
        Pair found for array ${sampleArray} and sum ${sum} : [${findPair(sampleArray, sum)}] 
    </p>
    <p>
        Pair2 found for array ${sampleArray} and sum ${sum} : [${findPair2(sampleArray, sum)}] 
    </p>
    `;
}

findPairRender();