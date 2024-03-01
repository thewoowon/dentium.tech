import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from '@emotion/styled';
import Link from 'next/link';

const Notice = () => {
  return (
    <NoticeContainer>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="noticeSwiper"
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        centeredSlides={true}
      >
        <SwiperSlide className="noticeSwiperSlide">
          데보션에서도 덴테크를 만나보세요!
          <Link
            href="https://devocean.sk.com/"
            target="_blank"
            style={{
              paddingLeft: '5px',
            }}
          >
            SK 텔레콤 - 데보션
          </Link>
        </SwiperSlide>
        <SwiperSlide className="noticeSwiperSlide">
          새로운 모습으로 돌아올 덴데크를 기다려주세요! 🤗 ~2024.02
        </SwiperSlide>
        <SwiperSlide className="noticeSwiperSlide">
          GPT 요약 기능이 추가되었어요! 🤩 이제 더욱 편하게 글을 이해할 수
          있어요!
        </SwiperSlide>
        <SwiperSlide className="noticeSwiperSlide">
          새로운 글이 작성되었어요! 만나러 가볼까요? 😆
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
`;
