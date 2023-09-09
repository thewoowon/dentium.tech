import styled from '@emotion/styled';
import Cube from './Cube';

const Banner = () => {
  return (
    <BannerContainer>
      <TextSection>
        <Typography>
          DENTECH,
          <SpanTypography>어느새 기술에 가까워지다.</SpanTypography>
        </Typography>
        <BottomTypography>
          기술을 통해 사람과 사람을 연결하는 서비스를 만듭니다.
        </BottomTypography>
      </TextSection>
      <CubeSection>
        <Cube />
      </CubeSection>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const TextSection = styled.div``;

const CubeSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 글자 간격 조정
const Typography = styled.div`
  font-size: 65px;
  font-weight: 600;
  letter-spacing: -0.05em;
  line-height: 1.2;
  font-weight: 700;
`;

const SpanTypography = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: #6e6e73;
`;

const BottomTypography = styled.div`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: 1.2;
  font-weight: 500;
  padding-top: 5px;
  padding-left: 5px;
  color: #606073;
`;
