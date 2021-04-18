let twoSum = function( nums, target ) {
let result;    
    for (let i = 0; i < nums.length-1; i++) {
        for (let k = i+1; k <= nums.length-1; k++) {
            if ( nums[i] + nums[k] === target ) {
                result = [i, k];
                break;
            }
        }
        if ( result === target ) break;
    }
    return result;
};

a = [89, 45, 7, 11, 15, 22, 105, 59, 2];
b = 9;
twoSum(a, b);
