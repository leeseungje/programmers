## n의배수

정수 `num`과 `n`이 매개 변수로 주어질 때, `num`이 `n`의 배수이면 1을 return `n`의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

#### 입출력 예

- 98은 2의 배수이므로 1을 return합니다.
- 32는 3의 배수가 아니므로 0을 return합니다.

```javascript
function solution(num, n) {
  let result = 0
  result = num % n === 0 ? 1 : 0
  return result
}
```

## 공배수

정수 `number`와 `n`, `m`이 주어집니다. `number`가 `n`의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

#### 입출력 예

- 60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.
- 55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.

```javascript
function solution(number, n, m) {
  let result = number % n === 0 && number % m === 0 ? 1 : 0
  return result
}
```

## 홀짝에 따라 다른 값 반환하기

양의 정수 `n`이 매개변수로 주어질 때, `n`이 홀수라면 `n` 이하의 홀수인 모든 양의 정수의 합을 return 하고 `n`이 짝수라면 `n` 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

#### 입출력 예

- 예제 1번의 `n`은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.
- 예제 2번의 `n`은 10으로 짝수입니다. 10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고 이들의 제곱의 합인 2에2승 + 4에4승 + 6에6승 + 8에8승 + 10에10승 = 4 + 16 + 36 + 64 + 100 = 220을 return 합니다.

```javascript
function solution(n) {
  var result = 0
  if (n % 2 === 0) {
    for (let i = 0; i <= n; i += 2) {
      result += i * i
    }
  } else {
    for (let i = 1; i <= n; i += 2) {
      result += i
    }
  }
  return result
}
```

이 코드가 길어 다른 풀이를 봤는데 수학의 개념으로 풀이를 한사람이 있어 가지고 왔다.

```javascript
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2)
  else return (n * (n + 1) * (n + 2)) / 6
}
```

짝수일때 등차수열의 합, 홀수일때 자연수 거듭제곱의 합...
수학이 짱인가 보다..봐도 이해가 안된다..ㅜ

## 조건 문자열

문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

두 수가 n과 m이라면

- ">", "=" : `n` >= `m`
- "<", "=" : `n` <= `m`
- ">", "!" : `n` > `m`
- "<", "!" : `n` < `m`

두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 `n`과 `m`이 주어질 때,<br />
`n`과 `m`이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

#### 입출력 예

- 20 <= 50은 참이기 때문에 1을 return합니다.
- 41 > 78은 거짓이기 때문에 0을 return합니다.

```javascript
function compare(a, b, ineq, eq) {
  switch (eq) {
    case '!':
      if (ineq === '>') {
        return a > b ? 1 : 0
      } else {
        return a < b ? 1 : 0
      }
    case '=':
      if (ineq === '>') {
        return a >= b ? 1 : 0
      } else {
        return a <= b ? 1 : 0
      }
  }
}

function solution(ineq, eq, n, m) {
  let result = compare(n, m, ineq, eq)
  return result
}
```

이걸하면서 느꼈다... 나는 수학에 멍청하다는걸...

```javascript
function solution(ineq, eq, n, m) {
  if (eq === '=' && n === m) return 1
  if (ineq === '<' && n < m) return 1
  if (ineq === '>' && n > m) return 1
  return 0
}
```

세상에 천재는 참 많은거 같다.<br />
이렇게 깔끔하게 처리할 수 있는데..

## flag에 따라 다른 값 반환하기

두 정수 `a`, `b`와 boolean 변수 `flag`가 매개변수로 주어질 때, `flag`가 true면 `a` + `b`를 `false`면 `a` - `b`를 return 하는 solution 함수를 작성해 주세요.

## 입출력 예

- 예제 1번에서 `flag`가 true이므로 `a` + `b` = (-4) + 7 = 3을 return 합니다.
- 예제 2번에서 `flag`가 false이므로 `a` - `b` = (-4) - 7 = -11을 return 합니다.

```javascript
function solution(a, b, flag) {
  let result = flag ? a + b : a - b
  return result
}
```

질문의 난이도가 오락가락 하는거 같다.
