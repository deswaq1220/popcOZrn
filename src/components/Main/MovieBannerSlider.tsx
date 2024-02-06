import React, { useState, useRef } from "react";
import styles from "./MovieBannerSlider.module.css";
import { IoIosArrowBack } from "react-icons/io";
interface Movie {
  id: number;
  title: string;
  posterPath: string;
  bannerPath: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Deckhee",
    posterPath: "/images/Deckhee.jpeg",
    bannerPath: "/images/Deckhee-Banner.jpeg",
  },
  {
    id: 2,
    title: "WK",
    posterPath: "/images/WK.jpeg",
    bannerPath: "/images/WK-Banner.jpeg",
  },
  {
    id: 3,
    title: "Dog",
    posterPath: "/images/Dog.jpeg",
    bannerPath: "/images/Dog-Banner.jpeg",
  },
  {
    id: 4,
    title: "Picnic",
    posterPath: "/images/Picnic.jpeg",
    bannerPath: "/images/Picnic-Banner.jpeg",
  },
  {
    id: 5,
    title: "ET",
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

  const toggleFavorite = (id: number) => {
    setFavorites((currentFavorites) => ({
      ...currentFavorites,
      [id]: !currentFavorites[id],
    }));
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
              <div className={styles.buttonWrap}>
                <button
                  className={styles.favoriteButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(movie.id);
                  }}
                >
                  {favorites[movie.id] ? "🩷" : "💔"}
                </button>
                <button className={styles.bookingButton} onClick={(e) => {}}>
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
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MovieBannerSlider;
