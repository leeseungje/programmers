## 문자열 출력하기

문자열 `str`이 주어질 때, `str`을 출력하는 코드를 작성해 보세요.

#### 제한사항

- 1 ≤ `str`의 길이 ≤ 1,000,000
- `str`에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', function (line) {
  input = [line]
}).on('close', function () {
  str = input[0]
  console.log(str)
})
```

처음에 코드가 길어서 뭘 어떻게 입력하나 애를 먹었는데 그냥 console.log만 찍느면 되는 거였다. ㅠ

## a와 b 출력하기

정수 `a`와 `b`가 주어집니다.<br />
각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.

#### 제한사항

- -100,000 ≤ `a`, `b` ≤ 100,000

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
  console.log(`a = ${input[0]}\nb = ${input[1]}`)
})
```

## 문자열 반복해서 출력하기

문자열 `str`과 정수 `n`이 주어집니다.<br />
`str`이 `n`번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

### 제한사항

- 1 ≤ `str`의 길이 ≤ 10
- 1 ≤ `n` ≤ 5

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
  str = input[0]
  n = Number(input[1])
  let result = ''
  for (let i = 0; i < n; i++) {
    result += str
  }
  console.log(result)
})
```

str = 'string', n = 5<br />
n값을 for문을 돌려 5번의 str 반복값을 빈 result에 넣으면 된다.

## 대소문자 바꿔서 출력하기

영어 알파벳으로 이루어진 문자열 `str`이 주어집니다.<br />
각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

#### 제한사항

- 1 ≤ `str`의 길이 ≤ 20
- `str`은 알파벳으로 이루어진 문자열입니다.

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''

rl.on('line', function (line) {
  input = line
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
})
```

입력값 length for문을 돌려 input[i] 값과 input[i]의 대문자 인지 소문자인지 체크해서,<br />
동일 하면 빈 result값에 반대로 한자씩 넣으면 된다.

## 특수문자 출력하기

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('close', function () {
  console.log(`!@#$%^&*(\\'"<>?:;`)
})
```

'\' 해당값이 하나만 있을때 안나와서 '\\' 두개를 넣어야 한다.
