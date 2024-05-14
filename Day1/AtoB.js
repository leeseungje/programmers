/* 
    a와 b 출력하기
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${input[0]}\nb = ${input[1]}`);
});

/* 
    출력 값이 
    a = 4
    b = 5
    이걸 원하고 input은 ['4', '5'] 이니 해당 방법으로 처리
*/