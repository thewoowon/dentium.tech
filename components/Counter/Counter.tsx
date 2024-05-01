import React from 'react';
import CountUp from 'react-countup';

const AnimatedNumber = ({ end, suffix }: { end: number; suffix: string }) => {
  return <CountUp end={end} duration={2} separator="," suffix={suffix} />;
};

export default AnimatedNumber;
