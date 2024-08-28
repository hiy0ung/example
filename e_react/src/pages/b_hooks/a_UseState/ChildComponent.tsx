import React from 'react'

type UserType = {
  username: string;
  height: number;
};

type ChildProps = {
  userData: UserType | undefined
}

export default function ChildComponent({ userData }: ChildProps) {
  return (
    <div>
      {/* userData값이 버튼을 누르지 않으면 undefinded이기 때문에 논리 연산자를 사용해 값 있는 것을 검증해서 가져옴 */}
      {userData && (
        // JSX에서 소괄호 내의 UI 구현부 (HTML)가 비워질 경우 오류 (단일 루트 노드)
        <>
          <p>사용자 이름: {userData.username}</p>
          <p>사용자 키: {userData.height}</p>
        </>
      )}
    </div>
  )
}
