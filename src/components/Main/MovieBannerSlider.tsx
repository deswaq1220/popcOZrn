import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieBannerSlider.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
interface Movie {
  id: number;
  title: string;
  posterPath: string;
  bannerPath: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "시민덕희",
    posterPath: "/images/Deckhee.jpeg",
    bannerPath: "/images/Deckhee-Banner.jpeg",
  },
  {
    id: 2,
    title: "웡카",
    posterPath: "/images/WK.jpeg",
    bannerPath: "/images/WK-Banner.jpeg",
  },
  {
    id: 3,
    title: "도그데이즈",
    posterPath: "/images/Dog.jpeg",
    bannerPath: "/images/Dog-Banner.jpeg",
  },
  {
    id: 4,
    title: "소풍",
    posterPath: "/images/Picnic.jpeg",
    bannerPath: "/images/Picnic-Banner.jpeg",
  },
  {
    id: 5,
    title: "외계인2부",
    posterPath: "/images/ET.jpeg",
    bannerPath: "/images/ET-Banner.jpeg",
  },
  {
    id: 6,
    title: "Seul",
    posterPath: "/images/Seul.jpeg",
    bannerPath: "/images/Seul-Banner.jpeg",
  },
  {
    id: 7,
    title: "How",
    posterPath: "/images/How.jpeg",
    bannerPath: "/images/How-Banner.jpeg",
  },
  {
    id: 8,
    title: "Old",
    posterPath: "/images/Old.jpeg",
    bannerPath: "/images/Old-Banner.jpeg",
  },
  {
    id: 9,
    title: "Wish",
    posterPath: "/images/Wish.jpeg",
    bannerPath: "/images/Wish-Banner.jpeg",
  },
  {
    id: 5,
    title: "Monster",
    posterPath: "/images/Monster.jpeg",
    bannerPath: "/images/Monster-Banner.jpeg",
  },
];

const MovieBannerSlider: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState<Movie>(movies[0]);
  const [favorites, setFavorites] = useState<{ [id: number]: boolean }>({});
  const sliderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleFavorite = (movie: Movie) => {
    if(localStorage.getItem('userData')){
      setFavorites((currentFavorites) => {
        const isFavorited = !currentFavorites[movie.id];
        if (isFavorited) {
          localStorage.setItem(`favorite_${movie.id}`, JSON.stringify(movie));
          alert(`${movie.title}을 찜하셨습니다. 마이페이지에서 찜한 목록을 확인하실 수 있습니다.`);
        } else {
          localStorage.removeItem(`favorite_${movie.id}`);
        }
        return { ...currentFavorites, [movie.id]: isFavorited };
      });
    }else{
      alert("로그인 후 이용바랍니다.")
    }
  };



  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleFavoriteAlert = (id: number) => {
    setFavorites((currentFavorites) => {
      const isFavorited = !currentFavorites[id];
      if (isFavorited) {
        alert("찜!! 되었어요");
      }
      return { ...currentFavorites, [id]: isFavorited };
    });
  };

  const handleTicketing = () => {
    navigate('/ticketing')
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.bannerWrap}>
        <img
          src={currentBanner.bannerPath}
          alt={currentBanner.title}
          className={styles.bannerImage}
        />
      </div>
      <div className={styles.sliderWrapper}>
        <button
          onClick={() => scrollSlider("left")}
          className={`${styles.arrowButton} ${styles.arrowLeft}`}
        >
          <IoIosArrowBack />
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={styles.posterWrapper}
              onClick={() => setCurrentBanner(movie)}
            >
              <img
                src={movie.posterPath}
                alt={movie.title}
                className={styles.poster}
              />
              <div className={styles.buttonWrapper}>
                <button
                  className={styles.favoriteButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(movie);
                  }}
                >
                  {favorites[movie.id] ? <IoHeartSharp /> : <IoHeartOutline />}
                </button>
                <button className={styles.bookingButton} onClick={handleTicketing}>
                  예매하기
                </button>

              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollSlider("right")}
          className={`${styles.arrowButton} ${styles.arrowRight}`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default MovieBannerSlider;
