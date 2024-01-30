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
    </div>
  );
};

export default Ticketing;
