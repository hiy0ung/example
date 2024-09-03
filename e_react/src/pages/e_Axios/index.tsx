import React from 'react'
import Axios01 from './Axios01'

export default function Index() { // 함수형 컴포넌트로 인식하려면 대문자 I 사용? (Hook 사용 위해)
  return (
    <div>
      <h1>리액트 HTTP 통신 라이브러리 (Axios)</h1>

      <Axios01 />
    </div>
  )
}
