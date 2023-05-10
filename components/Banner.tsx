import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import styled from '@emotion/styled';

function Banner() {

  const videoList = ['/videos/rest.mp4','/videos/typing.mp4','/videos/typing_3.mp4']

  return (
    <SliderOutsideAlign>
      <DecoArea>
        <TextArea>
          <TitleText>{'DENTECH'}</TitleText>
          <SubTitleText>
            {'우리는 항상 더 나은 방법을 찾아가며 고객과 함께 성장합니다.'}
          </SubTitleText>
        </TextArea>
        <ButtonArea>
          <Button className="_swiper-button-prev text-2xl">{'<'}</Button>
          <Button className="_swiper-button-next text-2xl">{'>'}</Button>
        </ButtonArea>
      </DecoArea>
      <Swiper
        id="carousel"
        slidesPerView={1}
        loop={true}
        modules={[Navigation, A11y]}
        style={{ position: 'relative' }}
        navigation={{
          nextEl: '._swiper-button-next',
          prevEl: '._swiper-button-prev',
        }}
      >
        {Array.from({ length: 2 }).map((_, id) => (
          <SwiperSlide key={id}>
            <video autoPlay muted loop>
              <source src={videoList[id]} />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderOutsideAlign>
  );
}

export default Banner;

const SliderOutsideAlign = styled.div`
  max-width: 1920px;
  max-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  overflow: hidden;
`;

const DecoArea = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  position: absolute;
  color: white;
  font-family: Pretendard;
  font-weight: 700;
  z-index: 2;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
`;
const TextArea = styled.div`
  color: white;
  font-family: Pretendard;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;
`;

const TitleText = styled.div`
  padding-top: 28px;
  font-size: 52px;
  line-height: 42px;
  font-weight: 700;
  padding-bottom: 12px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1080px) {
    font-size: 42px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

const SubTitleText = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1080px) {
    font-size: 20px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 30px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 20px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 32px;

`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #ffffff;
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    width: 38px;
    height: 38px;
  }
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;
