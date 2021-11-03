let printHistogram = (numbers: Array<number>): void => {
  let valueMap: Object = {};
  let uniqueKeys: Array<number> = new Array<number>();

  for (let i: number = 0; i < numbers.length; ++i) {
    if (Object.keys(valueMap).find((x) => x === numbers[i].toString())) {
      //value already exists, need to increment
      valueMap[numbers[i]] = ++valueMap[numbers[i]];
    } else {
      // value didn't exist in map so initialize
      valueMap[numbers[i]] = 1;
      uniqueKeys.push(numbers[i]);
    }
  }

  // to collect and print final output
  let output: Array<string> = new Array<string>();

  // determine number of lines of output
  let maxInstances: number = 0;
  for (let i: number = 0; i < uniqueKeys.length; ++i) {
    if (valueMap[uniqueKeys[i]] > maxInstances) {
      maxInstances = valueMap[uniqueKeys[i]];
    }
  }

  let singleOutput: Array<string>;

  // outer loop is by line of output, need 1 to n instances based on highest occurence
  for (let i: number = maxInstances; i > 0; --i) {
    singleOutput = new Array<string>();

    // inner loop is by item in numbers param
    for (let j: number = 0; j < uniqueKeys.length; ++j) {
      if (valueMap[uniqueKeys[j]] >= i) {
        singleOutput.push('*');
      } else {
        singleOutput.push(' ');
      }
    }

    output.push(singleOutput.join(''));
  }

  // last line of output, unique items from numbers param
  output.push(uniqueKeys.join(''));

  // print results
  for (let i: number = 0; i < output.length; ++i) {
    console.log(output[i]);
  }
};

// Example 1
// Input: [3, 4, 2, 1, 6, 6, 4, 4]
// Output:
//  *
//  *  *
// *****
// 34216

console.log('Example 1');
let example: Array<number> = [3, 4, 2, 1, 6, 6, 4, 4];
printHistogram(example);

// Example 2
// Input: [8, 8, 8, 8, 6, 1, 1, 8, 1, 4]
// Output:
// *
// *
// * *
// * *
// ****
// 8614

console.log('');
console.log('Example 2');
example = [8, 8, 8, 8, 6, 1, 1, 8, 1, 4];
printHistogram(example);

// Example 3
// Input: [1, 3, 3]
// Output:
//  *
// **
// 13
console.log('');
console.log('Example 3');
example = [1, 3, 3];
printHistogram(example);
