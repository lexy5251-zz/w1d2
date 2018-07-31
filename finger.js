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

//Join all the fingers that represent the 2 numbers being mutiplied
var joinedFingers = leftJoinedFingers + rightJoinedFingers;

//then count how many fingers there are joined . *10

joinedFingers *= 10
console.log('Joined', joinedFingers);
//lastly count roaming fingers from left hand and multiply by roaming fingers in right hand
var roammingFingers = leftRoamingFingers + rightRoamingFingers;
console.log('Roaming ', roammingFingers);

//finaly step: add step #4 with step #5
console.log('FInal: ', joinedFingers + roammingFingers);
