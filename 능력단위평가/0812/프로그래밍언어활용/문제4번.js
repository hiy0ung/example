// JavaScript를 사용하여 세 개의 숫자를 입력받아, 각각의 숫자에 대해 다음의 연산을 수행한 후 결과를 출력하는 프로그램을 작성하세요:

// 1. 세 숫자의 합
// 2. 세 숫자의 평균
// 3. 세 숫자 중 가장 큰 값

// 입력은 `prompt`를 사용하여 받으며, 결과는 `console.log`로 출력하세요.


let num1 = Number(prompt('숫자 1을 입력하세요'));
let num2 = Number(prompt('숫자 2을 입력하세요'));
let num3 = Number(prompt('숫자 3을 입력하세요'));

let sum = num1 + num2 + num3
console.log(sum);
console.log(sum / 3);
console.log(Math.max(num1, num2, num3));