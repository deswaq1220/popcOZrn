import React from 'react'
import './Ticketing.css';
import SelectBox from './SelectBox';
import Count from './Count';

const Ticketing = () => {
  return (
    <>
      <form className='movie_select'>
        <li><label className='select'/>영화선택<SelectBox /></li>
        <li><label className='count' />총 인원</li>
      </form>
      <section>

      </section>
    </>
  )
}

export default Ticketing