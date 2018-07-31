// commend line argus first
var left = process.argv[2];
var right = process.argv[3];
console.log('Left ', left);
console.log('Right ', right);
// right text commit



var leftJoinedFingers = left - 5;
var rightJoinedFingers = right - 5;
var leftRoamingFingers = 10 - left;
var rightRoamingFingers = 10 - right;

console.log(leftJoinedFingers, leftRoamingFingers);
console.log(rightJoinedFingers, rightRoamingFingers);