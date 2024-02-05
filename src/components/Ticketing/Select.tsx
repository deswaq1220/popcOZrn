// movie 객체 만들어서 map
import { useState } from "react";
import { Movie } from "./Ticketing";

interface SelectProps {
  movies: Movie[];
  selectedIndex: number;
  onSelectItem: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({ movies, selectedIndex, onSelectItem }: SelectProps) => {
  return (
    <>
      <select onChange={onSelectItem} className="select">
        {movies.map((item, index) => {
          return <option key={index}>{item.title}</option>;
        })}
      </select>
    </>
  );
};

export default Select;
