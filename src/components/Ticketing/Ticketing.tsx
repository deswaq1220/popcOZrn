import "./Ticketing.css";
const SelectBox = () => {
  return (
    <select className="select">
      <option key="movie1" value="movie1">
        movie1
      </option>
      <option key="movie2" value="movie2">
        movie2
      </option>
      <option key="movie3" value="movie3">
        movie3
      </option>
      <option key="movie4" value="movie4">
        movie4
      </option>
    </select>
  );
};

const Ticketing = () => {
  return (
    <div className="ticketing-container">
      <div className="left-container">
        <div className="option">
          <div className="select-box">
            영화선택 <SelectBox />
          </div>
          <div className="count-people">
            총 인원
            <p className="count"></p>
          </div>
        </div>
        <img className="posters" src="/src/img/poster1.avif"></img>
      </div>
      <div className="verticle-line"></div>
    
    <div className="right-container">
      <div className="screen">screen</div>
      <div className="seatsContainer">
        <div className="row1">
          <span className="seatA">A</span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
        </div>
        <div className="row">
          <span className="seatB">B</span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="occupiedSeat"></span>
          <span className="occupiedSeat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
        </div>
        <div className="row">
          <span className="seatC">C</span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="occupiedSeat"></span>
          <span className="occupiedSeat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
        </div>
        <div className="row">
          <span className="seatD">D</span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
        </div>
        <div className="row">
          <span className="seatE">E</span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
        </div>
        <div className="row">
          <span className="seatF">F</span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="occupiedSeat"></span>
          <span className="occupiedSeat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
        </div>
      </div>

      <div className="showcase">
        <li>
          <div className="availableSeatIcon"></div>
          <div className="availableSeat-text">선택가능</div>
        </li>
        <li>
          <div className="selectedSeatIcon"></div>
          <div className="selectedSeat-text">선택좌석</div>
        </li>
        <li>
          <div className="occupiedSeatIcon"></div>
          <div className="occupiedSeat-text">예매완료</div>
        </li>
      </div>
      <div className="sum-price">총 합계: </div>
      </div>
  </div>
  );
};

export default Ticketing;
