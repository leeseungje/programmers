/*  
    문자열 str과 정수 n이 주어집니다.
    str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
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
    str = input[0];
    n = Number(input[1]);
    let result = ''
    for (let i = 0; i < n; i++) {
        result += str
    }
    console.log(result)

});

/* 
    str은 string 값이 나오고
    n 은 5라는 값이 나와 
    n으로 포문을 돌려서 빈 result값에 str값을 추가 하는 방법
    더 깔끔한 방법은 repeat라는 반복함수를 이용해 코드를 간결하게 만들 수 있다.
    console.log(str.repeat(n));
*/

