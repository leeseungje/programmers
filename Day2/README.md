## 덧셈식 출력하기

두 정수 `a`, `b`가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.

#### 제한사항

- 1 ≤ `a`, `b` ≤ 100

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', function (line) {
  input = line.split(' ')
}).on('close', function () {
  const a = Number(input[0])
  const b = Number(input[1])
  console.log(`${a} + ${b} = ${a + b}`)
})
```

한줄로 할 수 있는데 너무 길어져서 각 값을 변수에 넣고 값 추출

## 문자열 붙여서 출력하기

## 문자열 돌리기

## 홀짝 구분하기

## 문자열 겹쳐쓰기
