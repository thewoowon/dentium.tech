import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from '@emotion/styled';

const Notice = () => {
  return (
    <NoticeContainer>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="noticeSwiper"
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        centeredSlides={true}
      >
        <SwiperSlide className="noticeSwiperSlide">
          GPT 요약 기능이 추가되었어요! 🤩 이제 더욱 편하게 글을 이해할 수
          있어요!
        </SwiperSlide>
        <SwiperSlide className="noticeSwiperSlide">
          새로운 글이 작성되었어요! 만나러 가볼까요? 😆
        </SwiperSlide>
        <SwiperSlide className="noticeSwiperSlide">
          덴테크의 새로운 소식을 구독으로 받아보세요! ✉️
        </SwiperSlide>
        <SwiperSlide className="noticeSwiperSlide">
          오늘의 커피챗은 무엇일까요? ☕️
        </SwiperSlide>
        <SwiperSlide className="noticeSwiperSlide">
          덴테크가 새롭게 단장했어요! ✨
        </SwiperSlide>
      </Swiper>
    </NoticeContainer>
  );
};

export default Notice;

const NoticeContainer = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #ffffff;
`;
