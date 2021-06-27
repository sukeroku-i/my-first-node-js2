'use strict';

const num = process.argv[2] || 0;

'引数の判断'
let sum;
if  (num == 0){
    sum = 0;
} else {
    sum = 1;
}

for(let i = 1; i <= num; i++){
    sum = sum * i;
}

console.log(`${num}の階乗は${sum}です。`);

