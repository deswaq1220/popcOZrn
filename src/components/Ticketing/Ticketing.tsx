import "./Ticketing.css";
import Seat from "./Seat";
import { useState } from "react";
import Select from "./Select";
export interface Movie {
  title: string;
  poster: string;
  price: number;
}

export const movies: Movie[] = [
  { title: "웡카", poster: "/src/img/posters/웡카.jpeg", price: 12000 },
  {
    title: "시민덕희",
    poster: "/src/img/posters/시민덕희.jpeg",
    price: 13000,
  },
  {
    title: "외계인+2부",
    poster: "/src/img/posters/외계인.jpeg",
    price: 12000,
  },
  { title: "소풍", poster: "/src/img/posters/소풍.jpeg", price: 12000 },
  {
    title: "도그데이즈",
    poster: "/src/img/posters/도그데이즈.jpeg",
    price: 12000,
  },
];
export const Ticketing: React.FC = () => {
  console.log(movies);
  const [selectedCount, setSelectedCount] = useState(0);
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
            <p className="count">{selectedCount}</p>
          </div>
        </div>
        <img className="posters" src={movies[selectedIndex].poster} />
      </div>
      <div className="verticle-line"></div>
      <Seat
        selectedCount={selectedCount}
        setSelectedCount={setSelectedCount}
        movies={movies}
        selectedIndex={selectedIndex}
      />
    </div>
  );
};
