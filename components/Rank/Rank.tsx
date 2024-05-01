// 3등까지의 랭크를 나타내는 컴포넌트

import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';

const RankBox = () => {
  return (
    <Grid>
      <Box>
        <Image
          className="animate-bounce"
          src={'/images/america.png'}
          alt="korea"
          width={100}
          height={100}
        />
        <BottomBoxSecond>2</BottomBoxSecond>
      </Box>
      <Box>
        <Image
          className="animate-bounce"
          src={'/images/korea.png'}
          alt="korea"
          width={100}
          height={100}
        />
        <BottomBoxOne>1</BottomBoxOne>
      </Box>
      <Box>
        <Image
          className="animate-bounce"
          src={'/images/japan.png'}
          alt="korea"
          width={100}
          height={100}
        />
        <BottomBoxThird>3</BottomBoxThird>
      </Box>
    </Grid>
  );
};

export default RankBox;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
  width: 1080px;
`;

const BottomBoxOne = styled.div`
  background-color: #8DECB4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  color: white;
  border-radius: 10px 10px 0 0;
  font-size: 36px;
`;

const BottomBoxSecond = styled.div`
  background-color: #41B06E;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  color: white;
  border-radius: 10px 10px 0 0;
  font-size: 36px;
`;

const BottomBoxThird = styled.div`
  background-color: #141E46;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  color: white;
  border-radius: 10px 10px 0 0;
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 300px;
`;
