## 덧셈식 출력하기

두 정수 `a`, `b`가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.

#### 제한사항

- 1 ≤ `a`, `b` ≤ 100

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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

두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.<br />
입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.

#### 제한사항

- 1 ≤ `str1`, `str2`의 길이 ≤ 10

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input = line.split(' ')
}).on('close', function () {
  str1 = input[0]
  str2 = input[1]
  console.log((str1 + str2).replaceAll(' ', ''))
})
```

str1 + str2 이것만 해도 통과긴 해도 하나의 변수에라도 공백이 있을수가 있어서 replaceAll 추가

## 문자열 돌리기

문자열 `str`이 주어집니다.<br />
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

#### 제한사항

- 1 ≤ `str`의 길이 ≤ 10

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input = line
}).on('close', function () {
  for (let i of input) {
    console.log(i)
  }
})
```

for ...of 문을 이용해 i값 추출

## 홀짝 구분하기

자연수 `n`이 입력으로 주어졌을 때 만약 `n`이 짝수이면 "`n` is even"을, 홀수이면 "`n` is odd"를 출력하는 코드를 작성해 보세요.

#### 제한사항

- 1 ≤ `n` ≤ 1,000

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input = line.split(' ')
}).on('close', function () {
  n = Number(input[0])
  const isEven = n % 2 === 0 ? true : false
  console.log(isEven ? `${n} is even` : `${n} is odd`)
})
```

## 문자열 겹쳐쓰기

문자열 `my_string`, `overwrite_string`과 정수 s가 주어집니다. 문자열 `my_string`의 인덱스 `s`부터 `overwrite_string`의 길이만큼을 문자열 `overwrite_string`으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

#### 제한사항

- `my_string`와 `overwrite_string`은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ `overwrite_string`의 길이 ≤ `my_string`의 길이 ≤ 1,000
- 0 ≤ s ≤ `my_string`의 길이 - `overwrite_string`의 길이

```javascript
function solution(my_string, overwrite_string, s) {
  const first = my_string.slice(0, s)
  const end = my_string.slice(s + overwrite_string.length)
  const result = first + overwrite_string + end

  return result
}
```

이렇게 풀긴 했는데 찜찜해서 더 좋은 예시가 있을까 다른사람 풀이를 봤는데

```javascript
function solution(my_string, overwrite_string, s) {
  const answer = my_string.split('')
  answer.splice(s, overwrite_string.length, overwrite_string)
  return answer.join('')
}
```

이렇게 하는방식이 훨씬 깔끔해 보인다.
생각이 짧다 짧어..ㅠ
