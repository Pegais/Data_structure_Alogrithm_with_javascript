// some pointers:
// move one disc at a time;
// cannot put bigger disc on smaller;
// move disc only from top;
// 'n' number of disc to move from A to C using B;

// (3,A,C,B) 
//  =>| 2, A, B, C | 
// =>| A - C |
// =>| 2, B, C, A |



function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Moved disc ${n} from ${fromRod} to ${toRod} `);
        return;
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Moved disc ${n} from ${fromRod} to ${toRod} `);
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}





console.log(towerOfHanoi(2,"A","C","B"))