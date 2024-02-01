// movie 객체 만들어서 map
import { useState } from "react";
interface Movie {
  title: string;
  poster: JSX.Element;
}
const Select = () => {
  const movies: Movie[] = [
    {
      title: "웡카",
      poster: <img src="/src/img/posters/웡카.jpeg"></img>,
    },
    {
      title: "시민덕희",
      poster: <img src="/src/img/posters/시민덕희.jpeg.jpeg"></img>,
    },
    {
      title: "외계인+2부",
      poster: <img src="/src/img/posters/외계인.jpeg.jpeg.jpeg"></img>,
    },
    {
      title: "소풍",
      poster: <img src="/src/img/posters/소풍.jpeg.jpeg.jpeg"></img>,
    },
    {
      title: "도그데이즈",
      poster: <img src="/src/img/posters/도그데이즈.jpeg.jpeg.jpeg"></img>,
    },
  ];
  console.log(movies);
  const [poster, setPoster] = useState<JSX.Element>(movies[0].poster);

  const handlePoster = (e) => {
    const selectedTitle = e.target.value;
    const selectedIndex = movies.findIndex(
      (movie) => movie.title === selectedTitle
    );
    setPoster(movies[selectedIndex].poster);
    console.log(selectedIndex);
  };

  return (
    <>
      <select onChange={handlePoster} className="select">
        {movies.map((movie, index) => (
          <option key={index}>{movie.title}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
