import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = [
  { date: new Date(2020, 0, 1), value: 0 },
  { date: new Date(2020, 1, 1), value: 10 },
  { date: new Date(2020, 2, 1), value: 20 },
  // Add more data points as needed
];

const LineChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear svg content before adding new elements

    const width = svg.node()?.getBoundingClientRect().width ?? 500;
    const height = svg.node()?.getBoundingClientRect().height ?? 500;
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)] as [number, number])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) =>
      g.attr('transform', `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(xScale)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    const yAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) =>
      g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .call((g) => g.select('.domain').remove());

    const line = d3
      .line()
      .defined((d) => !isNaN(d[0]))
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]))
      .curve(d3.curveMonotoneX); // Apply smoothing to the line

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line as any);

    // Tooltip setup (optional)
    // Add your tooltip implementation here if needed
  }, [data]);

  return (
    <Container style={{ width: '100%', height: '400px' }}>
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }}></svg>
    </Container>
  );
};

export default LineChart;

const Container = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  height: 600px;
  background-color: rgba(0, 0, 0, 1);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
