import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ScrollAnimation({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 0.5, // 요소의 50%가 보일 때 트리거
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
      }} // 예제를 위한 높이 설정
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
