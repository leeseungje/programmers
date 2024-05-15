## 문자열 섞기

길이가 같은 두 문자열 `str1`과 `str2`가 주어집니다.<br />
두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

#### 제한사항

- 1 ≤ `str1`의 길이 = `str2`의 길이 ≤ 10
- `str1`과 `str2`는 알파벳 소문자로 이루어진 문자열입니다.

```javascript
function solution(str1, str2) {
  let result = []
  for (let i = 0; i < str1.length; i++) {
    result.push(str1[i])
    result.push(str2[i])
  }
  return result.join('')
}
```

## 문자 리스트를 문자열로 변환하기

문자들이 담겨있는 배열 `arr`가 주어집니다. `arr`의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

```javascript
function solution(arr) {
  let result = arr.join('')
  return result
}
```

## 문자열 곱하기

문자열 `my_string`과 정수 `k`가 주어질 때, `my_string`을 `k`번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

```javascript
function solution(my_string, k) {
  let result = ''
  for (let i = 0; i < k; i++) {
    result = result + my_string
  }
  return result
}
```

## 더 크게 합치기

연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

- 12 ⊕ 3 = 123
- 3 ⊕ 12 = 312

양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 `b` ⊕ `a` 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.<br />
단, `a` ⊕ `b`와 `b` ⊕ `a`가 같다면 `a` ⊕ `b`를 return 합니다.

```javascript
function solution(a, b) {
  const ab = Number(String(a) + String(b))
  const ba = Number(String(b) + String(a))
  return Math.max(ab, ba)
}
```

## 두 수의 연산값 비교하기

연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

- 12 ⊕ 3 = 123
- 3 ⊕ 12 = 312

양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 2 _ `a` _ `b` 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.<`b`r />
단, `a` ⊕ `b`와 2 _ `a` _ `b`가 같으면 `a` ⊕ `b`를 return 합니다.

```javascript
function solution(a, b) {
  const num1 = Number(String(a) + String(b))
  const num2 = 2 * a * b
  const result = num1 > num2 ? num1 : num2
  return result
}
```

꼭 마지막 코드가 찜찜해 더 괜찮은 풀이가 있나 봤다.

```javascript
function solution(a, b) {
  let num1 = parseInt(a + '' + b + '')
  let num2 = 2 * a * b
  return num1 > num2 ? num1 : num2
}
```

기가찬다... a+'' 이런방식으로 string 반환할 수가 있다는게...
