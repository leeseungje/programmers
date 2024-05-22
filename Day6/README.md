## 마지막 두 원소

정수 리스트 `num_list`가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

#### 입출력 예

- 마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.
- 마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.

```javascript
function solution(num_list) {
  const [a, b] = [...num_list].reverse()
  a > b ? num_list.push(a - b) : num_list.push(a * 2)
  return num_list
}
```

## 수 조작하기 1

정수 `n`과 문자열 `control`이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, `control`의 앞에서부터 순서대로 문자에 따라 `n`의 값을 바꿉니다.

- "w" : `n`이 1 커집니다.
- "s" : `n`이 1 작아집니다.
- "d" : `n`이 10 커집니다.
- "a" : `n`이 10 작아집니다.

위 규칙에 따라 `n`을 바꿨을 때 가장 마지막에 나오는 `n`의 값을 return 하는 solution 함수를 완성해 주세요.

#### 입출력 예

- 수 `n`은 `control`에 따라 다음과 같은 순서로 변하게 됩니다.
- 0 → 1 → 0 → 10 → 0 → 1 → 0 → 10 → 0 → -1 → -2 → -1
- 따라서 -1을 return 합니다.

```javascript
function solution(n, control) {
  for (let i of control) {
    switch (i) {
      case 'w':
        n = n + 1
        break
      case 's':
        n = n - 1
        break
      case 'd':
        n = n + 10
        break
      case 'a':
        n = n - 10
        break
    }
  }
  return n
}
```

## 수 조작하기 2

정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

- "w" : 수에 1을 더한다.
- "s" : 수에 1을 뺀다.
- "d" : 수에 10을 더한다.
- "a" : 수에 10을 뺀다.

그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

#### 제한 사항

- 2 ≤ numLog의 길이 ≤ 100,000

  - 100,000 ≤ numLog[0] ≤ 100,000
  - 1 ≤ i ≤ numLog의 길이인 모든 i에 대해 |numLog[i] - numLog[i - 1]|의 값은 1 또는 10입니다.

  ```javascript
  const change = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a'
  }
  function solution(numLog) {
    let result = ''
    numLog.map((cur, idx, arr) => {
      if (idx === 0) return
      result += change[cur - numLog.at(idx - 1)]
    })

    return result
  }
  ```

## 수열과 구간 쿼리3

정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[i, j]` 꼴입니다.<br />
각 `query`마다 순서대로 `arr[i]`의 값과 `arr[j]`의 값을 서로 바꿉니다.<br />
위 규칙에 따라 `queries`를 처리한 이후의 `arr`를 return 하는 solution 함수를 완성해 주세요.

#### 제한 사항

- 1 ≤ `arr`의 길이 ≤ 1,000
  - 0 ≤ `arr`의 원소 ≤ 1,000,000
- 1 ≤ `queries`의 길이 ≤ 1,000
  - 0 ≤ i < j < `arr`의 길이

```javascript
function solution(arr, queries) {
  for (let i of queries) {
    let temp = arr[i[0]]
    arr[i[0]] = arr[i[1]]
    arr[i[1]] = temp
  }
  return arr
}
```

## 수열과 구간 쿼리2

정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[s, e, k]` 꼴입니다.<br />
각 `query`마다 순서대로 `s` ≤ `i` ≤ `e`인 모든 `i`에 대해 `k`보다 크면서 가장 작은 `arr[i]`를 찾습니다.<br />
각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 `solution` 함수를 완성해 주세요.<br />
단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

#### 제한 사항

- 1 ≤ arr의 길이 ≤ 1,000
  - 0 ≤ arr의 원소 ≤ 1,000,000
- 1 ≤ queries의 길이 ≤ 1,000
  - 0 ≤ s ≤ e < arr의 길이
  - 0 ≤ k ≤ 1,000,000

```javascript
function solution(arr, queries) {
  let result = []

  for (let query of queries) {
    const [s, e, k] = query
    let minNum = Infinity

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < minNum) {
        minNum = arr[i]
      }
    }

    result.push(minNum === Infinity ? -1 : minNum)
  }

  return result
}
```
