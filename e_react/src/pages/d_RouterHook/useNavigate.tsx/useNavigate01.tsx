import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UseNavigate01() {
  //# useNavigate() 사용 방법
  const navigate = useNavigate();
  // >> '네비게이트' 라는 이름으로 호출
  // >> 원하는 경로를 인수로 전달

  //? useNavigate 훅의 옵션
  // - state 옵션
  // : 네비게이션(경로)과 함께 상태 전달이 가능
  // >> 해당 상태는 useLocation을 통해 접근 가능

  //? 조건부 네이게이션
  // >> 조건에 따른 페이지 전환

  const goToParentPage = () => {
    console.log("버튼이 클릭됨");

    //? 경로 지정 시 "/" 유무 차이
    // 1) / 작성 ("/parent")
    // : 메인 경로 + / 경로
    // >> localhost:3000/parent

    // 2) / 미작성 ("parent")
    // : 현재 경로 + /경로
    // >> localhost:3000/routerHook/parent

    navigate("/parent", { state: { userId: 12345 } });
  };

  const goToHomePage = () => {
    navigate("/");
  };

  const goToPrevPage = () => {
    navigate(-1);
  };

  const goToHooksPage = () => {
    navigate("/hooks", { state: { username: "이승아" } });
  };

  // 인증이 필요한 페이지로 이동하려고 하는 경우
  // >> 마이페이지, 리뷰 작성, 주문 조회 등

  // + 로그인 되어 있지 않으면 로그인 페이지로 이동

  // 원래 false로 지정해서 밑에 인증되지 않은 사용자 접근 못하도록 설계한 로직
  const isAuthenticated = true; 

  const handleSignUp = () => {
    // 인증된 사용자만 홈화면으로 이동 가능
    if (isAuthenticated) {
      navigate("/");
    }
  };

  // 로그인 되어있지 않으면 로그인 페이지로 이동
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // 임의의 버튼 클릭 시 b_hooks의 index.tsx로 이동
  // >> 이동 시 { username: '이승아' } 전달

  // b_hooks의 index.tsx에서 전달된 값을 받아
  // : 화면에 '이승아' 출력

  return (
    <div>
      <p>UseNavigate01 페이지입니다</p>
      <button onClick={goToParentPage}>parent 페이지로 이동합니다</button>
      <button onClick={goToHomePage}>Home 페이지로 이동합니다.</button>
      <button onClick={goToPrevPage}>이전 페이지로 이동합니다.</button>
      <button onClick={goToHooksPage}>Hooks 페이지로 이동합니다.</button>

      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
}
