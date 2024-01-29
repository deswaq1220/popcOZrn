import React from 'react'
import './TermsofUse.css'

const TermsofUse = () => {
  return (
    <>
      <section>
          <div className='agree_text'>
            <h1>이용약관 동의</h1>
          </div>
        <div className='service'>
          <div className='agree_wrap'>

            <div className="checkbox-wrap">
              <input type="checkbox" id="check1" name="동의" />
              <label htmlFor="check1">
                <span className='check'></span>
                <div className="check-text">
                  <p>전체 동의</p>
                  <p className='description'>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                </div>
              </label>
            </div>
            <div className="checkbox-wrap">
              <input type="checkbox" id="check2" name="동의" />
              <label htmlFor="check2">
                <span className='check'></span>
                <div className="check-text">
                  <p>이용약관 동의<span className='sub'>(필수)</span></p>
                </div>
              </label>
            </div>
            <div className="checkbox-wrap">
              <input type="checkbox" id="check3" name="동의" />
              <label htmlFor="check3">
                <span className='check'></span>
                <div className="check-text">
                  <p>개인정보 수집 및 동의<span className='sub'>(필수)</span></p>
                </div>
              </label>
            </div>

              
            <div className="checkbox-wrap">
              <input type="checkbox" id="check4" name="동의" />
              <label htmlFor="check4">
                <span className='check'></span>
                <div className="check-text">
                  <p>할인쿠폰 등 혜택/정보 수신 동의<span className='sub'>(선택)</span></p>
                </div>
              </label>
              <div className="checkbox-wrap horizontal">
              <input type="checkbox" id="check5" name="동의" />
              <label htmlFor="check5">
                <span className='check'></span>
                <div className="check-text smsCheck">
                  <p>SMS</p>
                </div>
              </label>
              <input type="checkbox" id="check6" name="동의" />
              <label htmlFor="check6">
                <span className='check'></span>
                <div className="check-text ">
                  <p>e-mail</p>
                </div>
              </label>
              </div>
            </div>
            <div className="checkbox-wrap">
              <input type="checkbox" id="check7" name="동의" />
              <label htmlFor="check7">
                <span className='check'></span>
                <div className="check-text ">
                  <p>본인은 만 14세 이상입니다.<span className='sub'>(필수)</span></p>
                </div>
              </label>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default TermsofUse