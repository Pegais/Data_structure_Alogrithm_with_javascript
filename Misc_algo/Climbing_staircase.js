// given a staircase of n steps , count the number of distinct ways to climb to the top;
// you can either take 1 step or 2 step at a time;

// n=1; climbingStairCase(1) =1; |1;
// n=2 : climbingStairCase(2); =2  |(1,1) and 2;
// n=3 : climbingStairCase(3); =3 |(1,1,1) ,(1,2) and (2,1);
// n=4 : climbingStairCase(4); =5 |(1,1,1,1) ,(1,1,2),(1,2,1),(2,1,1) and (2,2);

// for one step =1 , 2 steps =2 and nstep =n-1step + n-2step;

function climbingStairCase(n) { 
    let noOfways = [1, 2];
    for (let i = 2; i < n; i++){
        noOfways[i] = noOfways[i - 1] + noOfways[i - 2]; 
    }
    return noOfways[n - 1];
}

console.log(climbingStairCase(4));
console.log(climbingStairCase(2));