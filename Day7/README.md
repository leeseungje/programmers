## 배열 만들기 2

정수 `l`과 `r`이 주어졌을 때, `l` 이상 `r`이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.<br />
만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

#### 제한사항

- 1 ≤ `l` ≤ `1` ≤ 1,000,000

```javascript
function isFiveZeroNumber(num) {
  const str = num.toString()
  for (let char of str) {
    if (char !== '0' && char !== '5') {
      return false
    }
  }
  return true
}

function solution(l, r) {
  const result = []
  for (let i = l; i <= r; i++) {
    if (isFiveZeroNumber(i)) {
      result.push(i)
    }
  }
  return result.length > 0 ? result : [-1]
}
```

## 카운트 업

정수 `start_num`와 `end_num`가 주어질 때, `start_num`부터 `end_num`까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

#### 제한사항

0 ≤ `start_num` ≤ `end_num` ≤ 50

```javascript
function solution(start_num, end_num) {
  let result = []
  for (let i = start_num; i <= end_num; i++) {
    result.push(i)
  }
  return result
}
```

## 콜라츠 수열 만들기

모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 \* x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.<br />
그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다.<br />
계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다.<br />
임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.

#### 제한사항

- 1 ≤ n ≤ 1,000

```javascript
function solution(n) {
  let result = [n],
    num = n
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = 3 * num + 1
    }
    result.push(num)
  }

  return result
}
```

## 배열 만들기 4

정수 배열 `arr`가 주어집니다. `arr`를 이용해 새로운 배열 `stk`를 만드려고 합니다.<br />
변수 `i`를 만들어 초기값을 0으로 설정한 후 `i`가 `arr`의 길이보다 작으면 다음 작업을 반복합니다.<br />

- 만약 `stk`가 빈 배열이라면 `arr[i]`를 `stk`에 추가하고 i에 1을 더합니다.
- `stk`에 원소가 있고, `stk`의 마지막 원소가 `arr[i]`보다 작으면 `arr[i]`를 `stk`의 뒤에 추가하고 i에 1을 더합니다.
- `stk`에 원소가 있는데 `stk`의 마지막 원소가 `arr[i]`보다 크거나 같으면 `stk`의 마지막 원소를 `stk`에서 제거합니다.

위 작업을 마친 후 만들어진 `stk`를 return 하는 solution 함수를 완성해 주세요.

#### 제한사항

- 1 ≤ `arr`의 길이 ≤ 100,000
  - 1 ≤ `arr`의 원소 ≤ 100,000

```javascript
function solution(arr) {
  let stk = [],
    i = 0
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i])
      i++
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i])
      i++
    } else {
      stk.pop()
    }
  }
  return stk
}
```
