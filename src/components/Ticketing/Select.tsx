// movie 객체 만들어서 map
import { Movie } from "./Ticketing";

interface SelectProps {
  movies: Movie[];
  selectedIndex: number;
  onSelectItem: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({ movies, onSelectItem }: SelectProps) => {
  return (
    <>
      <select onChange={onSelectItem} className="select">
        {movies.map((item) => {
          return <option>{item.title}</option>;
        })}
      </select>
    </>
  );
};

export default Select;
