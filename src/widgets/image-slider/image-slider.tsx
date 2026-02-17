import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './image-slider.css';

interface ImageItem {
  id: number;
  image_url: string;
  alt?: string;
}

interface ImageSliderProps {
  images: ImageItem[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  if (!images || images.length === 0) {
    return (
      <div className={styles.sliderWrapper}>
        <div className={styles.skeletonWrapper} />
      </div>
    );
  }

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
            <img
              src={image.image_url}
              alt={image.alt}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
