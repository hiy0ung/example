// helloWorld.ts

console.log('Hello Typescript');

// ts 파일 명령어를 실행하기 위해서는
// : 해당 파일을 js 파일로 '컴파일(번역)'이 필요

// >> tsc 파일명.ts
//    : 같은 파일명의 js 확장자 파일이 자동 생성

// >> 컴파일 된 js파일을 Node.js 런타임 환경에서 실행
//    : node 파일명.js

let num: number = 3; // 타입 기능을 사용하는 TS 문법

console.log(num);

// : ts 코드는 실시간으로 js로 컴파일되지 X

//! ts-node
// : ts 코드를 실시간으로 js로 컴파일하고 실행 (js 파일 생성 X)

//? ts-node 설치
// : node_modules 폴더가 존재하는 최상단의 터미널에서 설치
// >> npm install -g ts-node
// >> npm install ts-node --save-dev

console.log('ts-node로 ts파일 실행하기');
// ts-node 파일명.ts