import "./Ticketing.css";
import Seat from "./Seat";
import { useState } from "react";
import Select from "./Select";
export interface Movie {
  title: string;
  poster: string;
}
const Ticketing: React.FC = () => {
  const movies: Movie[] = [
    { title: "웡카", poster: "/src/img/posters/웡카.jpeg" },
    {
      title: "시민덕희",
      poster: "/src/img/posters/시민덕희.jpeg",
    },
    {
      title: "외계인+2부",
      poster: "/src/img/posters/외계인.jpeg",
    },
    { title: "소풍", poster: "/src/img/posters/소풍.jpeg" },
    {
      title: "도그데이즈",
      poster: "/src/img/posters/도그데이즈.jpeg",
    },
  ];
  console.log(movies);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handlePoster = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTitle = e.target.value;
    const selectedIndex = movies.findIndex(
      (movie) => movie.title === selectedTitle
    );
    setSelectedIndex(selectedIndex);
  };
  return (
    <div className="ticketing-container">
      <div className="left-container">
        <div className="option">
          <div className="select-box">
            영화선택{" "}
            <Select
              movies={movies}
              selectedIndex={selectedIndex}
              onSelectItem={handlePoster}
            />
          </div>
          <div className="count-people">
            총 인원
            <p className="count"></p>
          </div>
        </div>
        <img className="posters" src={movies[selectedIndex].poster} />
      </div>
      <div className="verticle-line"></div>
      <Seat />
    </div>
  );
};
export default Ticketing;
