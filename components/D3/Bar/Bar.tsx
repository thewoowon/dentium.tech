import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const data = [
  { name: '대한민국', value: 1824, color: 'red' },
  { name: '미국', value: 95, color: 'blue' },
  { name: '중국', value: 10 },
  { name: '인도', value: 9 },
  { name: '사우디아라비아', value: 7 },
  { name: '일본', value: 6 },
  { name: '터키', value: 5 },
  { name: '베트남', value: 4 },
  { name: '독일', value: 3 },
  { name: '모로코', value: 3 },
];

const BarChart = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      const colorScale = d3
        .scaleSequential(d3.interpolateCool)
        .domain([0, 1824]); // 예시 데이터 범위

      // SVG 요소 초기화
      svg.selectAll('*').remove();

      // 차트의 크기 설정
      const width = 800;
      const height = 600;
      svg.attr('width', width).attr('height', height);

      // 데이터를 기반으로 스케일 설정
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .rangeRound([0, width])
        .padding(0.1);

      const yScale = d3
        .scaleLog()
        .domain([1, d3.max(data, (d) => d.value) as number])
        .range([height, 0]);
      // 바 추가 // 레인보우 색상으로 변경
      svg
        .append('g')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d) => xScale(d.name) as number)
        .attr('y', (d) => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', (d) => height - yScale(d.value))
        .attr('fill', (d) => colorScale(d.value));

      // X축 추가
      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

      // Y축 추가
      svg.append('g').call(d3.axisLeft(yScale));

      // 레이블 추가 // 폰트 컬러 화이트로 변경
      svg
        .append('g')
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text((d) => d.value)
        .attr('x', (d) => (xScale(d.name) as number) + xScale.bandwidth() / 2)
        .attr('y', (d) => yScale(d.value) - 10)
        // 안쪽에 표시
        .attr('text-anchor', 'middle')
        .attr('font-size', '14px')
        .attr('fill', 'black')
        .style('font-family', 'sans-serif');

      // 범례 추가
      svg
        .append('g')
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text((d) => d.name)
        .attr('x', (d) => (xScale(d.name) as number) + xScale.bandwidth() / 2)
        .attr('y', height + 20)
        .attr('text-anchor', 'middle')
        .attr('font-size', '14px')
        .attr('fill', 'white')
        .style('font-family', 'sans-serif');
    }
  }, [data]); // 데이터가 변경될 때마다 이펙트 실행

  return <svg ref={d3Container} />;
};

export default BarChart;
