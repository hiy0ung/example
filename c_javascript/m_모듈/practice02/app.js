// app.js

import { TodoManager } from "./TodoManager.js";

// import 구문은 항상 최상단에 모아서 한꺼번에 작성 권장


//# 1. 프로젝트 기능 정의

// - TodoManager 모듈의 기능을 사용하여 할 일 앱을 구현
// - 이벤트 등록, 할 일 목록 업데이트 등 로직을 담당

//? TodoManager의 인스턴스를 생성
const todoManager = new TodoManager();

//? HTML 요소 가져오기
const form = document.querySelector('#new-todo-form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 제출 이벤트 방지

  // form 내부에서 데이터 할 일 목록에 추가
  const text = input.value.trim(); // 문자 앞 뒤 공백 제거

  if (text !== '') { // 텍스트가 비워져있지 않다면
    todoManager.addTodo(text);
    input.value = ''; // 작성 후 input창 초기화
    updateTodoList(); // 할 일 목록 업데이트
  }
});

// 할 일 목록을 업데이트 하는 함수
function updateTodoList() {
  // 모든 할 일 가져오기
  const todos = todoManager.getTodos();

  // ul 태그 내부의 데이터(내용)를 삭제
  // HTML요소.innerHTML
  // : 요소 내부의 전체 HTML 코드를 문자열로 가져오기
  // 1 2 3에 4를 넣을 때 4만 끼워 넣는 것이 아니라, 1 2 3을 비우고 1 2 3 4를 넣음
  todoList.innerHTML = '';

  todos.forEach(todo => {
    // 태그에 사용될 텍스트 그대로를 전달
    const li = document.createElement('li');

    li.textContent = todo.text;
    
    // 순회되는 요소의 완료 여부가 true라면
    if (todo.completed) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }

    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTodoList();
    });
    // 삭제 버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button'); 

    // 삭제 버튼 클릭 시 해당 할 일 항목 제거
    deleteButton.addEventListener('click', (e) => {
      todoManager.removeTodo(todo.id);
      updateTodoList();
    });

    // ul >> li >> button
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
}

updateTodoList();