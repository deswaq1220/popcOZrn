
// import React from 'react'
import { SlLock, SlCreditCard, SlUser, SlUserFollow } from "react-icons/sl";
import "./Nav.css";
function Nav() {
  return (
    <>
      <header>

        <div className="headerWrap">
          <p className="logo">popcOZrn</p>
          <ul className="icons">
            <li>
              <SlCreditCard size={20} />
              <p>예매하기</p>
            </li>
            <li>
              <SlLock size={20} />
              <p>로그인</p>
            </li>
            <li>
              <SlUserFollow size={20} />
              <p>회원가입</p>
            </li>
            <li>
              <SlUser size={20} />
              <p>마이페이지</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Nav

