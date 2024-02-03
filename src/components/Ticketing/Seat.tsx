import { useState } from 'react';
import './Seat.css';

const Seat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleToggle = (seatId) => {
    // 좌석 ID에서 행과 열 번호 추출
    const row = seatId.charAt(0); // 첫번째 글자는 행을 나타냄
    const column = seatId.slice(1); // 두번째 글자는 열을 나타냄

    const selectedSeat = {
      row: row,
      column: column,
    };

    // 이미 선택된 좌석인 경우, 제거
    const isAlreadySelected = selectedSeats.some((seat) => seat.row === row && seat.column === column);
    if (isAlreadySelected) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat.row !== row || seat.column !== column)
      );
    } else {
      // 선택되지 않은 좌석인 경우, 추가
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, selectedSeat]);
    }
  };

  const handleTicketing = () => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));

    alert(
      "예매가 완료되었습니다!\n좌석: " +
        selectedSeats.map((seat) => `${seat.row}${seat.column}`).join(", ")
    );
  };

  const isSelectedSeat = (seatId) => {
    const [row, column] = seatId.split(''); // Extract row and column from seatId
  
    return selectedSeats.some((selectedSeat) => selectedSeat.row === row && selectedSeat.column === column);
  };
  

  const renderSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F"];
    const columns = Array.from({ length: 10 }, (_, index) => index + 1);

    return rows.map((row, rowIndex) => (
      <div key={row} className="row">
        <span className={`seat${row}`}>{row}</span>
        {columns.map((column, columnIndex) => {
          const seatId = `${row}${column}`;
          const occupiedSeat = ((rowIndex === 2 && (columnIndex === 4 || columnIndex === 5)) ||
            (rowIndex === 3 && (columnIndex === 6 || columnIndex === 7)) ||
            (rowIndex === 5 && (columnIndex === 1 || columnIndex === 2)));
          const isClickable = !(occupiedSeat);

          return (
            <span
              key={seatId}
              className="seat"
              onClick={isClickable ? () => handleToggle(seatId) : null}
              style={{
                background: isSelectedSeat(seatId) ? '#ffd600' : 'linear-gradient(0deg, #d21919, #d21919)',
                cursor: isClickable ? 'pointer' : 'not-allowed',
              }}
            >
            
            </span>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="right-container">
      <div className="screen">screen</div>
      <div className="seatsContainer">
        {renderSeats()}
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
      <button className="ticketing-btn" onClick={handleTicketing}>예매하기</button>
    </div>
  );
};

export default Seat;

  {/* <div className="row1">
          <span className="seatA">A</span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="blank"></span>
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
          <span className="blank"></span>
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
          <span className="blank"></span>
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
          <span className="blank"></span>
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
          <span className="blank"></span>
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
          <span className="blank"></span>
          <span className="occupiedSeat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
          <span className="seat"></span>
        </div> */}