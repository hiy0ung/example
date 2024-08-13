// **변수 선언:**

// 1. 숫자형 값들을 담는 배열 `numbers`를 선언하고, `5`개의 요소를 추가하여 초기화합니다.
// 2. 배열의 모든 요소의 합을 저장하는 `sum` 변수를 선언합니다.

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

// **함수 작성:**

// 1. `calculateSum()` 함수를 작성하여 배열 `numbers`의 모든 요소의 합을 계산하고, 그 결과를 `sum` 변수에 저장합니다.
// 2. 함수를 호출하여 `sum` 변수의 값을 `alert`를 통해 사용자에게 출력합니다.

function calculateSum(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

alert(calculateSum(numbers));