// obj01.js

//! 객체(Object) 개요

//# 1. '객체'의 정의
// : 관련된 데이터와 함수를 모아 놓은 집합
// : 객체 내부에서는 데이터와 함수를 프로퍼티(속성)과 메서드(기능)라고 불림

//? cf) 객체지향 프로그래밍
// : 실세계에 존재하고 인지하는 모든 것을 객체로 표현

//# 2. '객체'의 특징
// : (참조)데이터 타입 중 하나, 다양한 값을 담을 수 있는 컨테이너

//? cf) 배열도 여러 타입의 자료를 담을 수 있는 '객체'의 일부
//      : 여러 데이터를 순차적으로 인덱스를 부여한 타입

// - typeof(데이터): 해당 데이터의 형태를 반환
console.log(typeof([1, 2, 3])); // object

//# 3. '객체'의 구조

// 객체 지향 프로그램의 객체 - 고유한 특성과 동작을 가지는 것

//* EX) '사람'이라는 객체를 정의

// 특성 (속성, 프로퍼티) - 변수
// : 객체가 가진 데이터(값)
// : 객체를 구성하는 정보의 일부, 해당 객체의 상태를 나타냄

// - 이름, 나이, 성별, 직업, 주민등록번호, 키, 몸무게, ... 등

// 기능 (동작, 메서드) - 함수
// : 객체가 수행할 수 있는 행동이나 기능을 정의
// : 객체의 속성을 활용하거나 조작 가능

// - 공부하다, 걷다, 먹다, 말하다, 잠을 자다, ... 등

//* EX) '책'이라는 객체를 정의

//? 특성 (속성, 프로퍼티) - 변수
//: 책의 제목, 저자, 페이지의 수, 출판사 등

//? 기능 (동작, 메서드) - 함수
//: 책을 읽는 행위, 페이지를 넘기는 행위, 책에 대한 정보를 출력하는 행위 등

//* EX) '자동차'라는 객체르 ㄹ정의

//? 특성
// 모델명: 'Kia K9'
// 색상: 'black'
// 연식: 2024
// 현재 속도: 0

//? 기능
// 가속하기: '현재 속도'를 증가
// 정지하기: 차량을 정지시킴
// 경적울리기: 경적을 울림

//* EX) '스마트폰'이라는 객체를 정의

//? 특성 (속성)
// 제조사: 'SamSung'
// 모델: 's24'
// 저장공간: '1TB'
// 배터리상태: '85%'

//? 기능 (동작)
// 전화걸기
// 앱 실행하기
// 사진 찍기

//# 4. 객체의 기본 형태(구조)
// cf) let arrayName = [요소1, 요소2, ...] >> 보통 객체는 중괄호 줄바꿈 처리

let objectName = {
  // 키1: 값1,
  // 키2: 값2,
  // 키3: 값3.
  // ...

  // >> 값의 데이터 형식에는 제한 X (배열, 또 다른 객체, 함수 모두 사용 가능)
  // >> 키와 값을 하나의 쌍(멤버)으로 나열, 각각의 쌍은 ,(콤마)로 구분
  // >> 각각의 멤버(키와 값)는 콜론(:)으로 분리

  // 값은 중복될 수 있으나, 키는 중복될 수 없음
}

let lsa1 =['이', '승아'];

let lsa2 = {
  // 키(이름)는 문자열로 작성하되, 따옴표 없이 작성
  //: 영문자 사용을 권장, lowerCamelCase 사용을 권장
  lastName: '이',
  firstName: '승아',

  height: '169',
  hobby: ['야구 시청', '독서']
};

//# 5. 객체 생성 방법

// 1) 리터럴 방식
// : 가장 간단하고 일반적인 객체 생성 방식
// : 중괄호 {}를 사용하여 객체를 선언하고 초기화 - 그 안에 속성과 메서드 정의

let person = {
  //? 데이터 (키: 값)
  name: {
    last: '이',
    first: '승아'
  },

  age: 50,
  gender: 'female',
  interests: ['development', 'exercise'],
  isMarried: false
}

// 2) 생성자 함수 사용 방식
// : new 키워드와 함께 '사용자 정의 생성자 함수'를 사용하여 객체를 생성
// >> 같은 형태(구조)의 객체를 여러 개 생성할 때 유용

// : 함수 내부에서는 this 키워드를 사용해 객체의 속성(프로퍼티) 정의

//? cf) 생성자 함수명은 UpperCamelCase 사용을 권장
//      : 객체 생성을 위한 함수로 사용성을 명확하게 지정하기 위함

function Human(nameParam, heightParam) {
  // this 키워드의 경우
  // : 해당 생성자 함수로 생성되는 객체 그 자체
  // : 해당 함수로 생성되는 객체마다 this값이 달라짐

  this.name = nameParam;
  this.height = heightParam;

  this.greet = function() {
    console.log(`Hello, ${this.name}`);
  }
}

let person1 = new Human('이승아', 169);
let person2 = new Human('이도경', 157);

console.log(person1.name);
console.log(person1.height);
person1.greet();

console.log(person2.name);
console.log(person2.height);
person2.greet();