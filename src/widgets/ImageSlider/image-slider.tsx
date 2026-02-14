import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import cardnews1 from './assets/cardnews1.webp';
import cardnews2 from './assets/cardnews2.webp';
import cardnews3 from './assets/cardnews3.webp';
import cardnews4 from './assets/cardnews4.webp';
import * as styles from './image-slider.css';

const ImageSlider = () => {
  const images = [
    { id: 1, src: cardnews1, alt: '웹앱 설치 안내 1' },
    { id: 2, src: cardnews2, alt: '웹앱 설치 안내 2' },
    { id: 3, src: cardnews3, alt: '웹앱 설치 안내 3' },
    { id: 4, src: cardnews4, alt: '웹앱 설치 안내 4' },
  ];

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className={styles.swiperContainer}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
