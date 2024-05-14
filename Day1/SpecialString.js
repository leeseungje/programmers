/* 
    특수문자 출력하기
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`)
});

/* 
    처음에 '\' 가 안나오는지 모르는 상태에서 성공이 안되는지 몰랐다...
    '\\' 두번 넣어야 하나 출력이 된다.
*/