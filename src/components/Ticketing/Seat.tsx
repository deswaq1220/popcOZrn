const Seat = () => {
  return (
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
      <div className="sum-price">총 합계:30000원 </div>
      <button className="ticketing-btn">예매하기</button>
    </div>
  );
};

export default Seat;
