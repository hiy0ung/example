import { count } from "console";
import React, { useEffect, useState } from "react";

export default function UseEffect01() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("이승아");

  //! useEffect 기본 구조
  // : 1-2개의 인자가 필수 (콜백함수라서)

  //? 첫 번째 인자
  //: 콜백함수
  // >> 부수 효과를 수행하는 함수

  //? 두 번째 인자(의존성 배열, deps)
  // : 해당 배열의 값이 변경될 때마다 부수 효과가 다시 실행됨
  // >> 빈 배열: 컴포넌트가 마운트 될 때 한 번만 실행
  // +) 의존성 배열에 값이 있더라도 마운트 시에는 반드시 실행

  useEffect(() => {
    // 부수 효과를 작성
    console.log(`Count: ${count}`);
    // 의존 배열에 작성된 데이터의 상태변화가 일어날 경우
    // >> 효과를 재실행
  }, [count]);

  useEffect(() => {
    console.log(`Name: ${name}`);
  }, [name]);

  useEffect(() => {
    console.log('컴포넌트의 렌더링')
  }, []);
  // >> 의존성 배열이 아예 없는 경우: 모든 렌더링마다 실행

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        감소
      </button>
      <br />
      <p>{name}</p>
      <button onClick={() => setName(name === "이승아" ? "이도경" : "이승아")}>
        이름 변경
      </button>
    </div>
  );
}
