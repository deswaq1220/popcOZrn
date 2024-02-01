import { ChangeEvent, useEffect, useState } from 'react';
import './TermsofUse.css';

interface IndividualChecks {
  check2: boolean;
  check3: boolean;
  check4: boolean;
  check5: boolean;
  check6: boolean;
  check7: boolean;
}

interface TermsUseProps {
  termsAgreed: boolean;
  setTermsAgreed: React.Dispatch<React.SetStateAction<boolean>>;
}

const TermsofUse: React.FC<TermsUseProps> = ({ termsAgreed, setTermsAgreed }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState<IndividualChecks>({
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
  });

  

  useEffect(() => {
    setAllChecked(Object.values(individualChecks).every((item) => item));
  }, [individualChecks]);

  useEffect(() => {
    if (individualChecks.check5 && individualChecks.check6) {
      setIndividualChecks((prev) => ({ ...prev, check4: true }));
    } else {
      setIndividualChecks((prev) => ({ ...prev, check4: false }));
    }
  }, [individualChecks.check5, individualChecks.check6]);

  const handleAllChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    setIndividualChecks({
      check2: isChecked,
      check3: isChecked,
      check4: isChecked,
      check5: isChecked,
      check6: isChecked,
      check7: isChecked,
    });
    setTermsAgreed(isChecked);
  };

  const handleIndividualChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (id === 'check4') {
      setIndividualChecks((prev) => ({
        ...prev,
        check5: checked,
        check6: checked,
        [id]: checked,
      }));
    } else {
      setIndividualChecks((prev) => ({
        ...prev,
        [id]: checked,
      }));
    }
    if (id === 'check5' || id === 'check6') {
      setIndividualChecks((prev) => ({
        ...prev,
        check4: prev.check5 && prev.check6,
      }));
    }
    setTermsAgreed(allChecked && individualChecks.check2 && individualChecks.check3 && individualChecks.check7);
  };
  
  

  return (
    <>
      <section>
        <div className='agree_text'>
          <h1>이용약관 동의</h1>
        </div>
        <div className='service'>
          <div className='agree_wrap'>
            <div className='checkbox-wrap'>
              <input
                type='checkbox'
                id='check1'
                name='동의'
                checked={allChecked}
                onChange={handleAllChange}
              />
              <label htmlFor='check1'>
                <span className='check'></span>
                <div className='check-text'>
                  <p>전체 동의</p>
                  <p className='description'>
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
                  </p>
                </div>
              </label>
            </div>
            <div className='checkbox-wrap'>
              <input
                type='checkbox'
                id='check2'
                name='동의'
                checked={individualChecks.check2}
                onChange={handleIndividualChange}
              />
              <label htmlFor='check2'>
                <span className='check'></span>
                <div className='check-text'>
                  <p>
                    이용약관 동의<span className='sub'>(필수)</span>
                  </p>
                </div>
              </label>
            </div>
            <div className='checkbox-wrap'>
              <input
                type='checkbox'
                id='check3'
                name='동의'
                checked={individualChecks.check3}
                onChange={handleIndividualChange}
              />
              <label htmlFor='check3'>
                <span className='check'></span>
                <div className='check-text'>
                  <p>
                    개인정보 수집 및 동의<span className='sub'>(필수)</span>
                  </p>
                </div>
              </label>
            </div>

            <div className='checkbox-wrap'>
              <input
                type='checkbox'
                id='check4'
                name='동의'
                checked={individualChecks.check4}
                onChange={handleIndividualChange}
              />
              <label htmlFor='check4'>
                <span className='check'></span>
                <div className='check-text'>
                  <p>
                    할인쿠폰 등 혜택/정보 수신 동의<span className='sub'>(선택)</span>
                  </p>
                </div>
              </label>
              <div className='checkbox-wrap horizontal'>
                <input
                  type='checkbox'
                  id='check5'
                  name='동의'
                  checked={individualChecks.check5}
                  onChange={handleIndividualChange}
                />
                <label htmlFor='check5'>
                  <span className='check'></span>
                  <div className='check-text smsCheck'>
                    <p>SMS</p>
                  </div>
                </label>
                <input
                  type='checkbox'
                  id='check6'
                  name='동의'
                  checked={individualChecks.check6}
                  onChange={handleIndividualChange}
                />
                <label htmlFor='check6'>
                  <span className='check'></span>
                  <div className='check-text '>
                    <p>e-mail</p>
                  </div>
                </label>
              </div>
            </div>
            <div className='checkbox-wrap'>
              <input
                type='checkbox'
                id='check7'
                name='동의'
                checked={individualChecks.check7}
                onChange={handleIndividualChange}
              />
              <label htmlFor='check7'>
                <span className='check'></span>
                <div className='check-text '>
                  <p>
                    본인은 만 14세 이상입니다.<span className='sub'>(필수)</span>
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsofUse;
