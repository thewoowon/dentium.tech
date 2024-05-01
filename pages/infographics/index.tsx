import { useEffect } from 'react';
// import { dispose, init } from '../../utils/storm';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  ScrollAnimation,
  ScrollAnimationCounter,
} from '@/components/ScrollAnimation';
import down from '@images/down-arrow.svg';
import Image from 'next/image';
import { gradient } from '@/components/Gradient';
import Counter from '@/components/Counter';
//import Bar from '@/components/D3/Bar';
import Choropleth from '@/components/D3/Choropleth';
import RankBox, { BrowserRank } from '@/components/Rank';
import Confetti from '@/components/Confetti';
// import HelloDentech from '@/components/Anime';
// import { gradient } from '@/components/Gradient';

const Infographics = () => {
  useEffect(() => {
    //init();

    return () => {
      // cleanup
      //dispose();
    };
  }, []);

  useEffect(() => {
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <Container>
      <Trigger>
        <GradientText>2023 DENTECH</GradientText>
        <GradientText>INFOGRAPHIC</GradientText>
        <DownArrowContainer className="animate-bounce">
          <Image src={down} alt="down_arrow" width={80} height={80} />
        </DownArrowContainer>
      </Trigger>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.canvas
          initial={{
            filter: 'blur(20px)',
          }}
          animate={{
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{}}
          id="gradient-canvas"
          data-transition-in
          className="absolute top-0 right-[-2px] w-full h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }} // 예제를 위한 높이 설정
        >
          <H1>Hello!, Dentech</H1>
          {/* <HelloDentech /> */}
        </motion.div>
      </div>
      <ScrollAnimation>
        <H1>SINCE 2023.03</H1>
      </ScrollAnimation>
      <ScrollAnimation>
        <H1>작지만 원대한 시작!</H1>
      </ScrollAnimation>
      <ScrollAnimationCounter>
        <Grid columns={3} gap={100} row={2}>
          <Flex>
            <H3>2023년 총 방문자 수</H3>
            <Counter end={2009} suffix={'명'} />
          </Flex>
          <Flex>
            <H3>한 달 최고 방문자 수</H3>
            <Counter end={314} suffix={'명'} />
          </Flex>
          <Flex>
            <H3>하루 최고 방문자 수</H3>
            <Counter end={82} suffix={'명'} />
          </Flex>
          <Flex>
            <H3>글의 최고 조회 수</H3>
            <Counter end={254} suffix={'View'} />
          </Flex>
          <Flex>
            <H3>Direct 유입 수</H3>
            <Counter end={1355} suffix={'명'} />
          </Flex>
          <Flex>
            <H3>평균 참여 시간</H3>
            <Counter end={119} suffix={'초'} />
          </Flex>
        </Grid>
      </ScrollAnimationCounter>
      <ChartContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <RankBox />
          <H3 color={'white'}>덴테크를 방문한 사람들의 국가 Top 3</H3>
        </div>
      </ChartContainer>
      <ChartContainer>
        <Choropleth />
      </ChartContainer>
      <ChartContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <BrowserRank />
          <H3 color={'white'}>방문자가 가장 많이 사용한 브라우저</H3>
          <H2 color={'white'}>크롬</H2>
        </div>
      </ChartContainer>
      <ConfettiContainer>
        <Confetti />
        <H3 color={'white'}>사람들이 가장 많이 본 글</H3>
        <Image
          src={
            'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/61bfd7b6-4020-4d1a-5dce-d05d7872fb00/public'
          }
          alt="sql"
          width={300}
          height={300}
          style={{
            borderRadius: 10,
          }}
        />
        <H2>
          너도 알아야 한다,
          <br /> SQL과 데이터베이스
        </H2>
      </ConfettiContainer>
    </Container>
  );
};

export default Infographics;

const Container = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Trigger = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const GradientText = styled(motion.div)`
  background: linear-gradient(90deg, #ff00ff 0%, #ff0000 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const DownArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const H1 = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: white;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const H2 = styled.h3<{
  color?: string;
}>`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.color || 'white'};
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const H3 = styled.h3<{
  color?: string;
}>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.color || 'white'};
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Grid = styled.div<{
  columns?: number;
  row?: number;
  gap?: number;
}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
  grid-template-rows: repeat(${(props) => props.row || 2}, 1fr);
  gap: ${(props) => props.gap || 10}px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Flex = styled.div<{
  flexDirection?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  gap: 10px;
  position: relative;
`;

const ChartContainer = styled.div<{
  flexDirection?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

const ConfettiContainer = styled.div<{
  flexDirection?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  gap: 20px;
`;
