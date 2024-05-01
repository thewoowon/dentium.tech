import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ScrollAnimationCounter({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 1, // 요소의 50%가 보일 때 트리거
  });

  return (
    <Container
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {inView && children}
    </Container>
  );
}

export default ScrollAnimationCounter;

const Container = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;
  gap: 1rem;

  @media (max-width: 768px) {
    height: fit-content;
  }
`;
