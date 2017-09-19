/**
 * E27 Five problems every software engineer should be able to solve (Part 2).
 * Created by wyoro 9/18/17.
 */

const abcList = ['a', 'b', 'c'];
const numList = [1, 2, 3];

function zipList(abcList, numList) {
  const result = [];
  for (let i = 0; i < abcList.length; i++) {
    result.push(abcList[i], numList[i]);
  }
  return result;
}

console.log(zipList(abcList, numList));

function zipListTheSimpleWay(abcList, numList) {
  return _.flatten(_.zip(abcList, numList));
}

console.log(zipListTheSimpleWay(abcList, numList));