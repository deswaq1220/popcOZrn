import React, { useState, useRef } from 'react';
import styles from './MovieBannerSlider.module.css';

interface Movie {
  id: number;
  title: string;
  posterPath: string;
  bannerPath: string;
}

const movies: Movie[] = [
  { id: 1, title: 'Deckhee', posterPath: '/images/Deckhee.jpeg', bannerPath: '/images/Deckhee-Banner2.jpeg' },
  { id: 2, title: 'WK', posterPath: '/images/WK.jpeg', bannerPath: '/images/WK-Banner4.jpeg' },
  { id: 3, title: 'Dog', posterPath: '/images/Dog.jpeg', bannerPath: '/images/Dog-Banner.jpeg' },
  { id: 4, title: 'Picnic', posterPath: '/images/Picnic.jpeg', bannerPath: '/images/Picnic-Banner.jpeg' },
  { id: 5, title: 'ET', posterPath: '/images/ET.jpeg', bannerPath: '/images/ET-Banner.jpeg' },
];

const MovieBannerSlider: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState<Movie>(movies[0]);
  const [favorites, setFavorites] = useState<{ [id: number]: boolean }>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (id: number) => {
    setFavorites((currentFavorites) => ({ ...currentFavorites, [id]: !currentFavorites[id] }));
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.bannerWrap}>
        <img src={currentBanner.bannerPath} alt={currentBanner.title} className={styles.bannerImage} />
      </div>
      <div className={styles.sliderWrapper}>
        <button onClick={() => scrollSlider('left')} className={`${styles.arrowButton} ${styles.arrowLeft}`}>{'<'}</button>
        <div className={styles.slider} ref={sliderRef}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.posterWrapper} onClick={() => setCurrentBanner(movie)}>
              <img src={movie.posterPath} alt={movie.title} className={styles.poster} />
              <button className={styles.favoriteButton} onClick={(e) => { e.stopPropagation(); toggleFavorite(movie.id); }}>
                {favorites[movie.id] ? '🩷' : '💔'}
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => scrollSlider('right')} className={`${styles.arrowButton} ${styles.arrowRight}`}>{'>'}</button>
      </div>
    </div>
  );
};

export default MovieBannerSlider;
