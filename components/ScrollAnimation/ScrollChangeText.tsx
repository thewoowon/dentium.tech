import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollChangeText() {
  const [visibleText, setVisibleText] = useState('초기 텍스트');
  const handleScroll = () => {
    const position = window.scrollY;

    if (position < 200) {
      setVisibleText('초기 텍스트');
    } else if (position >= 200 && position < 400) {
      setVisibleText('두 번째 텍스트');
    } else if (position >= 400 && position < 600) {
      setVisibleText('세 번째 텍스트');
    } else {
      setVisibleText('마지막 텍스트');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={visibleText} // 키가 변경될 때마다 애니메이션 적용
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {visibleText}
      </motion.div>
    </AnimatePresence>
  );
}

export default ScrollChangeText;
