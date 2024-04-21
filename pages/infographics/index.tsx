import { useEffect } from 'react';
import { dispose, init } from '../../utils/storm';

const Infographics = () => {
  useEffect(() => {
    init();

    return () => {
      // cleanup
      dispose();
    };
  }, []);
  return (
    <div
      style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
        color: 'white',
        fontSize: '36px',
        fontWeight: 700,
      }}
    >
      준비 중입니다. 🚧 조금만 기다려주세요!
    </div>
  );
};

export default Infographics;
