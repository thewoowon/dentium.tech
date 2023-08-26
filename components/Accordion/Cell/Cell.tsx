import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { accordionState } from '@/states';

const Cell = ({ index }: { image: string; index: number }) => {
  const [accordionIndex] = useRecoilState(accordionState);
  const cellRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(cellRef.current, {
      width: index == accordionIndex ? '450px' : '150px',
      duration: 0.5,
    });
  }, [accordionIndex]);

  return <ItemContainer ref={cellRef}></ItemContainer>;
};

export default Cell;

// 모피즘 디자인
const ItemContainer = styled.div`
  height: 450px;
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background-color: #fff;
  border-radius: 18px;
  white-space: normal;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  &:hover {
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.16);
    scale: 1.02;
  }
`;
