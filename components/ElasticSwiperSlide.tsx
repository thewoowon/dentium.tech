import { SwiperSlide } from 'swiper/react';

const ElasticSwiperSlide = ({ width }: { width: number }) => {
  return (
    <SwiperSlide
      style={{
        width: `${width}px !important`,
      }}
    >
      hello
    </SwiperSlide>
  );
};

export default ElasticSwiperSlide;
