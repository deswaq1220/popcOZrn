import React, { useState } from 'react';
import styles from './MovieBannerSlider.module.css';

interface Movie {
  id: number;
  title: string;
  posterPath: string;
  bannerPath: string;
}

const movies: Movie[] = [
  { id: 1, title: 'Deckhee', posterPath: '/images/Deckhee.jpeg', bannerPath: '/images/Deckhee-Banner.jpeg' },
  { id: 2, title: 'WK', posterPath: '/images/WK.jpeg', bannerPath: '/images/WK-Banner.jpeg' },
  { id: 3, title: 'Dog', posterPath: '/images/Dog.jpeg', bannerPath: '/images/Dog-Banner.jpeg' },
  { id: 4, title: 'Picnic', posterPath: '/images/Picnic.jpeg', bannerPath: '/images/Picnic-Banner.jpeg' },
  { id: 5, title: 'ET', posterPath: '/images/ET.jpeg', bannerPath: '/images/ET-Banner.jpeg' },

];
const MovieBannerSlider: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState<Movie>(movies[0]);

  const scrollSlider = (direction: 'left' | 'right') => {
    // Find the index of the current banner in the movies array
    const currentIndex = movies.findIndex(movie => movie.id === currentBanner.id);
    // Calculate the new index based on the direction
    const newIndex = direction === 'left'
      ? (currentIndex - 1 + movies.length) % movies.length
      : (currentIndex + 1) % movies.length;
    // Set the new banner
    setCurrentBanner(movies[newIndex]);
  };

  return (
    <div className={styles.sliderContainer}>
        <div className={styles.bannerWrap}>
      <img src={currentBanner.bannerPath} alt={currentBanner.title} className={styles.bannerImage} />
          </div>
      <div className={styles.sliderWrapper}>
        <button onClick={() => scrollSlider('left')} className={`${styles.arrowButton} ${styles.arrowLeft}`}>{'<'}</button>
        <div className={styles.slider}>
          {movies.map((movie) => (
            <img 
              key={movie.id} 
              src={movie.posterPath} 
              alt={movie.title} 
              className={styles.poster} 
              onClick={() => setCurrentBanner(movie)}
            />
          ))}

          </div>
        <button onClick={() => scrollSlider('right')} className={`${styles.arrowButton} ${styles.arrowRight}`}>{'>'}</button>
      </div>
    </div>
  );
};

export default MovieBannerSlider;
