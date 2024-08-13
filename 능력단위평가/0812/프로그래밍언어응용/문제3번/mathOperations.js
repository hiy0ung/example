// mathOperations.js

// 1. `mathOperations.js`라는 파일을 생성하여, 아래 기능을 제공하는 함수를 정의하세요.
// - `add(a, b)`: 두 수의 합을 반환하는 함수 (Named Export로 내보내기)
// - `subtract(a, b)`: 두 수의 차를 반환하는 함수 (Named Export로 내보내기)
// - `multiply(a, b)`: 두 수의 곱을 반환하는 함수 (Default Export로 내보내기)

// add
export function add(a, b) {
  return a + b;
}

// substract
export function substract(a, b) {
  return a - b;
}

// multiply
export default function multiply (a, b) {
  return a * b;
}