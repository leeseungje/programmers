## 코드 처리하기

문자열 `code`가 주어집니다.<br />
`code`를 앞에서부터 읽으면서 만약 문자가 "1"이면 `mode`를 바꿉니다. `mode`에 따라 `code`를 읽어가면서 문자열 `ret`을 만들어냅니다.<br />
`mode`는 0과 1이 있으며, `idx`를 0 부터 `code`의 길이 - 1 까지 1씩 키워나가면서 `code[idx]`의 값에 따라 다음과 같이 행동합니다.<br />

- `mode`가 0일 때<br />
  - `code[idx]`가 "1"이 아니면 `idx`가 짝수일 때만 `ret`의 맨 뒤에 `code[idx]`를 추가합니다.<br />
  - `code[idx]`가 "1"이면 `mode`를 0에서 1로 바꿉니다.<br />
- `mode`가 1일 때<br />
  - `code[idx]`가 "1"이 아니면 `idx`가 홀수일 때만 `ret`의 맨 뒤에 `code[idx]`를 추가합니다.<br />
  - `code[idx]`가 "1"이면 `mode`를 1에서 0으로 바꿉니다.<br />

문자열 `code`를 통해 만들어진 문자열 `ret`를 `ret`urn 하는 solution 함수를 완성해 주세요.<br />
단, 시작할 때 `mode`는 0이며, `ret`urn 하려는 `ret`가 만약 빈 문자열이라면 대신 "EMPTY"를 `ret`urn 합니다.

#### 제한사항

`code`는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다.

```javascript
function solution(code) {
  let result = '',
    mode = 0
  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      code[i] === '1' ? (mode = 1) : i % 2 === 0 && (result += code[i])
    } else {
      code[i] === '1' ? (mode = 0) : i % 2 === 1 && (result += code[i])
    }
  }
  return result.length === 0 ? 'EMPTY' : result
}
```

처음에 질문이 너무 길어서 이해하는데 조금 어려운게 있었다.<br />
쉽게 풀면 code = `'abc1abc1abc'` 이런값이 있을경우<br />
'1'이라는 글자에 지나가면 mode 라는 변수를 생성시켜 `1 : 0`을 왔다 갔다 처리한다.(최초 `0`)<br />
여기서 mode가 0일때는 `i` 짝수값 출력 1일때는 `i` 홀수값을 출력하며 `1` 값은 나오게 하지 않는다.<br />
마지막으로 result 값이 비어있을경우 return 값에 'EMPTY' 처리 하면 되는 거였다.

## 등차수열의 특정한 향만 더하기

두 정수 `a`, `d`와 길이가 n인 boolean 배열 `included`가 주어집니다. 첫째항이 `a`, 공차가 `d`인 등차수열에서 `included[i]`가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 `included`가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

#### 제한사항

- 1 ≤ `a` ≤ 100
- 1 ≤ `d` ≤ 100
- 1 ≤ `included`의 길이 ≤ 100
- `included`에는 true가 적어도 하나 존재합니다.

처음 코드를 만들때 계산을 너무 어렵게 생각했다.
included를 map 돌리고 `idx`가 0일때 a를 넣고 나머지 d를 넣은 arr배열을 만든후
i가 true일때 result `arr[i]`값을 추가 하니 실행은 하지만 너무 무식한 코드가 되버렸다..

```javascript
function solution(a, d, included) {
  let result = 0,
    num = 0,
    arr = []
  included.map((i, idx) => {
    if (idx === 0) {
      num += a
      arr.push(num)
    } else {
      num += d
      arr.push(num)
    }
    if (i) {
      result += arr[idx]
    }
  })
  return result
}
```

엄청난 if문과 변수가 많아 만들고도 `'...아 이건 아닌데'` 라는 생각을 했다.
그런데 계산법을 생각해 보니 결국 map에서 a + b \* idx를 하면 값이 알맞게 떨어지는거다..

```javascript
function solution(a, d, included) {
  let result = 0
  included.map((i, idx) => {
    if (i) result += a + d * idx
  })
  return result
}
```

얼마나 깔끔한가.... 혹시나 해서 chatGPT에 코드를 줄일 수 있는지 물어봤다.

```javascript
function solution(a, d, included) {
  return included.reduce((result, i, idx) => (i ? result + (a + idx * d) : result), 0)
}
```

난 아직 멀었다....

## 주사위 게임 2

1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 `a`, `b`, `c`라고 했을 때 얻는 점수는 다음과 같습니다.

- 세 숫자가 모두 다르다면 `a` + `b` + `c` 점을 얻습니다.
- 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (`a` + `b` + `c`) × (`a`2 + `b`2 + `c`2 )점을 얻습니다.
- 세 숫자가 모두 같다면 (`a` + `b` + `c`) × (`a`2 + `b`2 + `c`2 ) × (`a`3 + `b`3 + `c`3 )점을 얻습니다.

세 정수 `a`, `b`, `c`가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

#### 제한사항

- `a`, `b`, `c`는 1이상 6이하의 정수입니다.

```javascript
function pow(num, pow) {
  return Math.pow(num, pow)
}

function solution(a, b, c) {
  const sum = a + b + c
  const sumOfSquares = pow(a, 2) + pow(b, 2) + pow(c, 2)
  const sumOfCubes = pow(a, 3) + pow(b, 3) + pow(c, 3)

  if (a === b && b === c) {
    return sum * sumOfSquares * sumOfCubes
  } else if (a === b || b === c || a === c) {
    return sum * sumOfSquares
  } else {
    return sum
  }
}
```

제곱을 할때 Math.pow를 잘 이용하자.<br />
하면서 느끼지만 수학적인 문제가 엄청 많은거 같다.

## 원소들의 곱과 합

정수가 담긴 리스트 `num_list`가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

#### 제한사항

- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9

```javascript
function solution(num_list) {
  let num1 = 1,
    num2 = 0
  for (let i of num_list) {
    num1 *= i
    num2 += i
  }
  return num1 < Math.pow(num2, 2) ? 1 : 0
}
```

## 이어 붙인 수

정수가 담긴 리스트 `num_list`가 주어집니다. `num_list`의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

#### 제한사항

- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9
- `num_list`에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

```javascript
function solution(num_list) {
  let even = 0,
    odd = 0
  for (let i of num_list) {
    i % 2 === 0 ? (even += i + '') : (odd += i + '')
  }
  return parseInt(even) + parseInt(odd)
}
```

뭔가 갈수록 느는거 같긴 하다.
