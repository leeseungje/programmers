/* 
    영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
    각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let result = ''
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) {
            result += input[i].toLowerCase()
        }
        if (input[i] === input[i].toLowerCase()) {
            result += input[i].toUpperCase()
        }
    }
    console.log(result)
});

/* 
    입력값 length로 for문을 돌려
    input[i] 값과 input[i] 대문자가 같으면 소문자로 값을 전달하고,
    input[i] 값과 input[i] 소문자가 같으면 대문자로 값을 전달하게 처리했다.
*/