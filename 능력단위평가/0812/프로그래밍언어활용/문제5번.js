//* JavaScript 동작 구현:

// 1. 버튼을 클릭하면 `p` 태그의 내용을 `textContent` 속성을 사용하여 "버튼이 클릭되었습니다!"로 변경하도록 합니다.
// 2. 추가적으로, 클릭 후 콘솔에 "Button clicked!"라는 메시지를 출력하도록 합니다.
const textChange = document.querySelector('#changeText');

function changeText() {
  textChange.textContent = "버튼이 클릭되었습니다!" 
  console.log("Button clicked!");
}
