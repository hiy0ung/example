// ! a_javascript.js

//? 1. JS 주석
/*
자바스크립트
여러 줄 주석
*/

// 자바스크립트 한 줄 주석

//? 2. JS 확장자
// .js

//? 3. 웹 문서에서의 JS 파일 위치
// : 닫히는 body 태그 바로 위에 위치

// #간단한 JS 예제

// 웹 문서에서 button이라는 선택자를 요청하여 button에 담기
// const button = document.querySelector('button');

// button 요소에 클릭(click) 이벤트가 발생할 경우 updateName기능이 실행
// button.addEventListener('click', updateName);

// updateName에 대한 기능 정의
function updateName() {
  // 프롬프트 창으로 사용자로부터 이름을 입력받기
  const name = prompt('Enter new name');
  // 버튼의 텍스트 내용으로 입력받은 이름을 업데이트
  button.textContent = `Player1: ${name}`;
  console.log(`${name}`);
}

// ! 자바스크립트 개발 환경 설정

// 1. 코드 작성 및 확인
// : 개발자도구 (ctrl + shift + i / F12)

// 2. 플러그링 설치
// -코드 스니펫
// - ESLint

console.log('안녕하세요');
// >> 콘솔 입력 스니펫(clg)

console.log('안녕하세요');

// node 환경에서 파일 실행
// : node 파일명.js
