'use strict';

function kaijo(num) {

let result;

'引数画0かそれ以外で判断'
let sum;
if  (num == 0){
    sum = 0;
} else {
    sum = 1;
}

'階乗の計算'
for(let i = 1; i <= num; i++){
    sum = sum * i;
}

'計算結果の返却'
result = (`${num}の階乗は${sum}です。`);
return result;

};

'コンソールから数を取得し、階乗の関数を呼び出し'
const num = process.argv[2] || 0;
const returnmoji = kaijo(num);
console.log(returnmoji);



