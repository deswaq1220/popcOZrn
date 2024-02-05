import React, { useState } from 'react';
import './Seat.css';
import { Movie } from "./Ticketing";

interface SeatProps {
  selectedCount: number;
  movies: Movie[];
  selectedIndex: number;
  setSelectedCount: (count: number) => void;
}

const Seat: React.FC<SeatProps> = ({ selectedCount, setSelectedCount, selectedIndex, movies }) => {
  const [selectedSeats, setSelectedSeats] = useState<{ row: string; column: number }[]>([]);

  const extractRowAndColumn = (seatId: string): {row: string; column: number} => {
    const row = seatId.charAt(0);
    const column = parseInt(seatId.slice(1), 10);
    return { row, column };
  };

  const handleToggle = (seatId: string) => {
    const { row, column } = extractRowAndColumn(seatId);
    const selectedSeat = { row, column };
    //이미선택된 좌석인지 아닌지
    const isAlreadySelected = selectedSeats.some(
      (seat) => seat.row === selectedSeat.row && seat.column === selectedSeat.column
    );
      //이미 선택된 좌석인 경우 
    if (isAlreadySelected) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter(
          (seat) => seat.row !== selectedSeat.row || seat.column !== selectedSeat.column
        )
      );
       console.log("선택된 좌석");
      setSelectedCount(selectedCount -= 2);
    } else {
      //아직 선택되지 않은 경우 
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, selectedSeat]);
    }
    setSelectedCount(selectedCount += 1);
  };

  const handleTicketing = () => {
    const totalPrice = calculateTotalPrice();
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    localStorage.setItem('totalPrice', totalPrice.toString());

    alert(
      "예매가 완료되었습니다!\n좌석: " +
        selectedSeats.map((seat) => `${seat.row}${seat.column}`).join(", ") +
        "\n가격: " + totalPrice + "원"
    );
  };

  const isSelectedSeat = (seatId: string) => {
    const { row, column } = extractRowAndColumn(seatId);
    return selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.column === column
    );
  };

  const isOccupiedSeat = (rowIndex:number, column:number) => {
    return (
      (rowIndex === 2 && (column === 4 || column === 5)) ||
      (rowIndex === 3 && (column === 6 || column === 7)) ||
      (rowIndex === 5 && (column === 1 || column === 2))
    );
  };

  const renderSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F"];
    const columns = Array.from({ length: 10 }, (_, index) => index + 1);

    return rows.map((row, rowIndex) => (
      <div key={row} className="row">
        <span className={`seat${row}`}>{row}</span>
        {columns.map((column) => {
          const seatId = `${row}${column}`;
          const occupiedSeat = isOccupiedSeat(rowIndex, column);
          const isClickable = !occupiedSeat;

          return (
            <span
              key={seatId}
              className="seat"
              onClick={isClickable ? () => handleToggle(seatId) : undefined}
              style={{
                background: occupiedSeat
                  ? '#a9a9a9'
                  : isSelectedSeat(seatId)
                  ? '#ffd600'
                  : 'linear-gradient(0deg, #d21919, #d21919)',
                cursor: isClickable ? 'pointer' : 'not-allowed',
                marginLeft: column === 6 ? '55px' : '5px',
              }}
            ></span>
          );
        })}
      </div>
    ));
  };

  const calculateTotalPrice = () => {
    if (!movies) {
      console.error("");
      return 0;
    }

    return selectedSeats.reduce((total, seat) => {
      const selectedMovie = movies[selectedIndex];
      const seatPrice = selectedMovie ? selectedMovie.price : 0;
      return total + seatPrice;
    }, 0);
  };

  return (
    <div className="right-container">
      <div className="screen">스크린</div>
      <div className="seatsContainer">
        <span className="seatA">A</span>
        <span className="seatB">B</span>
        <span className="seatC">C</span>
        <span className="seatD">D</span>
        <span className="seatE">E</span>
        <span className="seatF">F</span>
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
       <div className="sum-price">총 합계: {calculateTotalPrice()}원</div>
       <button className="ticketing-btn" onClick={handleTicketing}>예매하기</button>
     </div>
  );
};

export default Seat;
