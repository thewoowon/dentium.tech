import styled from '@emotion/styled';
import Cube from './Cube';

const Banner = () => {
  return (
    <BannerContainer>
      <CubeSection>
        <Cube />
      </CubeSection>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CubeSection = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;
