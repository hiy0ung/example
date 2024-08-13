// const userInput = "Hello World";

// >> 문제 2

// 다음과 같은 문자열 처리 기능을 구현하기 위해 JavaScript 내장 함수를 사용하여 코드를 작성하세요.

// >> 요구사항

// 1. 사용자가 입력한 문자열에서 모든 공백을 제거한 후, 해당 문자열을 역순으로 변환하는 함수를 작성하세요.
// 2. 결과 문자열이 대문자로 변환된 후 출력되도록 하세요.

const userInput = "Hello World";

let trimWord = userInput.trim();
let splitWord = trimWord.split('');
let reverseWord = splitWord.reverse();
let joinWord = reverseWord.join('');
let upperWord = joinWord.toUpperCase();

console.log(upperWord);