import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Page01 from './Page01'
import Page02 from './Page02'

export default function Index() {
  return (
    <div>
      <h1 style={{
      backgroundColor: 'black',
      color: 'white'
    }}>리액트 라우터 돔</h1>
      <ul>
        <li>
          <Link to='page01'>페이지 01로 이동</Link>
        </li>
        <li>
          <Link to='page02'>페이지 02로 이동</Link>
        </li>
      </ul>
      {/* 
      해당 컴포넌트의 현재 경로 : http://localhost:3000/routerComponent
      */}
      {/* 중첩된 라우트 설정 */}
      <Routes>
        {/* 해당 컴포넌트의 현재 경로를 기준으로 추가 경로 지정 */}

        {/* 빈 슬래시(/)만 쓰는 경우: 현재 컴포넌트의 경로로 지정 */}
        <Route path='/page01' element={<Page01 />}/>
        {/* 경로에 새로운 경로가 추가되는 경우: 현재 컴포넌트르 기준으로 추가 */}
        <Route path='/page02' element={<Page02 />}/> 
      </Routes>
    </div>
  )
}
