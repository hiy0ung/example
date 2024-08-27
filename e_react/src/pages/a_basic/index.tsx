import React from "react";
import Props01 from "./d_Props/Props01";
import Props02 from "./d_Props/Props02";
import Rendering01 from "./f_Rendering/Rendering01";
import Rendering02 from "./f_Rendering/Rendering02";

// import ReactExample from './pages/a_basic/a_React/ReactExample';

// // 파일명까지 명시
// import Component01 from './pages/a_basic/b_Component/Component01';

// // index라는 이름을 가진 파일은 폴더명까지만 명시 가능
// import Index0826 from './pages/a_basic/b_Component';
// import JSX from './pages/a_basic/c_JSX';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

export default function index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        리액트 기본 문법
      </h1>
      <Props01 />
      <Props02 />

      <h2>f_Rendering 리액트의 조건부 랜더링</h2>
      <Rendering01 />
      <Rendering02 />
    </div>
  );
}
