import React from 'react'

// 함수형 컴포넌트 snippets: rfc, rfce (해당 파일은 rfce 사용)

//# 자식 컴포넌트
// 화살표 함수를 사용한 컴포넌트 생성

// - 부모로부터 사용자에 대한 데이터를 전달(props - 객체?) 받아 UI로 반환

type User = {
  name: string;
  age: number;
  email: string;
}

// props 데이터는 변수, 객체든 상관없이 무조건 {} 객체 내에 작성 
// : 객체의 데이터를 한 번에 받아오기 위해서는 {} 객체 틀 외에 또 다른 {} 객체 틀로 묶어야 함
type UserCardProps = { user: User };

// const UserCard = ({ name, age, email }: Users) => {
// >> 각각의 속성명을 변수로 사용 (구조분해할당)
// { name, age, email } = {'이승아', 50, 'qwe123' }

// { user } = { { name, age, email } }

const UserCard = ({ user }: UserCardProps) => {
  // { user } = { props전달: User }
  // { user } = { {name: '이승아', age: 50, email: 'qwe123' } }
  
  console.log(user.name);
  console.log(user.age);

  const { name, age, email } = user; // 구조분해할당
  console.log(name);
  console.log(age);

  return (
    // 단일 루트 노드: JSX는 반드시 하나의 루트 태그를 가져야 함!
    <div>
      <h4>{user.name}</h4>
      <p>Age: {age}</p>
      <p>Age: {user.age}</p>

      <p>Email: {email}</p>
      <p>Email: {user.email}</p>
    </div>
  )

}

//# 부모 컴포넌트 (메인으로 내보내기 되는 것)
function Props02() {
  const userData = {
    name: '이승아',
    age: 50,
    email: 'qwe123'
  };

  return (
    <div>
      {/* props는 반드시 매개변수명={전달할 데이터} */}
      <UserCard user={userData} />
      <UserCard user={{ name: '이도경', age: 60, email: 'qweqwe123' }} />
      {/* <UserCard name='이승아' age=50 email='qwe123' /> */}
      {/* 객체 사용시 중괄호로 묶어줘야함 */}
      
    </div>
  )
}

export default Props02;