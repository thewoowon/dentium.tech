import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { geoPath, geoMercator } from 'd3-geo';
import { FeatureCollection } from 'geojson';

interface WorldData {
  code: string;
  pop: number;
}

const WorldMap = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null); // Ref for the tooltip element

  useEffect(() => {
    const fetchData = async () => {
      const geoData = await d3.json<FeatureCollection>(
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
      );
      const popData = await d3.csv<WorldData>(
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv',
        (d) => {
          return { code: d.code, pop: +d.pop };
        }
      );

      const dataMap = new Map<
        string,
        {
          population: number;
          visitors: number;
          koreanName: string;
        }
      >([
        ['KOR', { population: 0, visitors: 1829, koreanName: '대한민국' }],
        ['USA', { population: 0, visitors: 95, koreanName: '미국' }],
        ['CHN', { population: 0, visitors: 10, koreanName: '중국' }],
        ['JPN', { population: 0, visitors: 10, koreanName: '일본' }],
        ['IND', { population: 0, visitors: 9, koreanName: '인도' }],
        ['SAU', { population: 0, visitors: 8, koreanName: '사우디아라비아' }],
        ['TUR', { population: 0, visitors: 5, koreanName: '터키' }],
        ['VNM', { population: 0, visitors: 5, koreanName: '베트남' }],
        ['DEU', { population: 0, visitors: 3, koreanName: '독인' }],
        ['MAR', { population: 0, visitors: 3, koreanName: '모로코' }],
        ['NLD', { population: 0, visitors: 3, koreanName: '네덜란드' }],
        ['POL', { population: 0, visitors: 3, koreanName: '폴란드' }],
        ['RUS', { population: 0, visitors: 3, koreanName: '러시아' }],
        ['ALB', { population: 0, visitors: 2, koreanName: '알바니아' }],
        ['HUN', { population: 0, visitors: 2, koreanName: '헝가리' }],
        ['IDN', { population: 0, visitors: 2, koreanName: '인도네시아' }],
        ['IRL', { population: 0, visitors: 2, koreanName: '아일랜드' }],
        ['ROU', { population: 0, visitors: 2, koreanName: '루마니아' }],
        ['SGP', { population: 0, visitors: 2, koreanName: '싱가포르' }],
        ['GBR', { population: 0, visitors: 2, koreanName: '영구' }],
        ['UZB', { population: 0, visitors: 2, koreanName: '우즈베키스탄' }],
        ['AUS', { population: 0, visitors: 1, koreanName: '오스트레일리아' }],
        ['BGD', { population: 0, visitors: 1, koreanName: '방글라데시' }],
        [
          'BIH',
          { population: 0, visitors: 1, koreanName: '보스니아&헤르체고비나' },
        ],
        ['BRA', { population: 0, visitors: 1, koreanName: '브라질' }],
        ['CAN', { population: 0, visitors: 1, koreanName: '캐나다' }],
        ['CZE', { population: 0, visitors: 1, koreanName: '체코' }],
        ['ECU', { population: 0, visitors: 1, koreanName: '에콰도르' }],
        ['EGY', { population: 0, visitors: 1, koreanName: '이집트' }],
        ['GRC', { population: 0, visitors: 1, koreanName: '그리스' }],
        ['HKG', { population: 0, visitors: 1, koreanName: '홍콩' }],
        ['ITA', { population: 0, visitors: 1, koreanName: '이탈리아' }],
        ['KEN', { population: 0, visitors: 1, koreanName: '케냐' }],
        ['LBN', { population: 0, visitors: 1, koreanName: '레바논' }],
        ['NGA', { population: 0, visitors: 1, koreanName: '나이지리아' }],
        ['PAK', { population: 0, visitors: 1, koreanName: '파키스탄' }],
        ['TWN', { population: 0, visitors: 1, koreanName: '대만' }],
        ['THA', { population: 0, visitors: 1, koreanName: '태국' }],
        ['UKR', { population: 0, visitors: 1, koreanName: '우크라이나' }],
        ['ARE', { population: 0, visitors: 1, koreanName: '아랍에미리트' }],
      ]);

      popData.forEach((d) => {
        if (dataMap.has(d.code)) {
          dataMap.set(d.code, {
            population: d.pop,
            visitors: dataMap.get(d.code)?.visitors ?? 0,
            koreanName: dataMap.get(d.code)?.koreanName ?? '',
          });
        } else {
          dataMap.set(d.code, {
            population: d.pop,
            visitors: 0,
            koreanName: '',
          });
        }
      });

      if (svgRef.current && geoData) {
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove(); // Clear svg content before adding new elements

        const width = svg.node()?.getBoundingClientRect().width ?? 500;
        const height = svg.node()?.getBoundingClientRect().height ?? 500;

        const projection = geoMercator()
          .scale(200)
          .center([0, 0])
          .translate([width / 2, height / 2]);

        const pathGenerator = geoPath().projection(projection);
        const colorScale = d3
          .scaleThreshold<number, string>()
          .domain([1, 5, 10, 50, 100, 2000])
          .range(d3.schemeGreens[7]);

        svg
          .append('g')
          .selectAll('path')
          .data(geoData.features)
          .enter()
          .append('path')
          .attr('d', pathGenerator)
          .attr('fill', (d) => {
            const result = dataMap.get(d.id as string) ?? 0;
            return colorScale(typeof result === 'number' ? 0 : result.visitors);
          })
          .style('stroke', 'transparent')
          .attr('class', 'Country')
          .style('opacity', 0.8)
          .on('mouseover', function (event, d) {
            const result = dataMap.get(d.id as string) ?? 'No data';
            d3.select(tooltipRef.current)
              .style('opacity', 1)
              .html(
                `
                <div style="font-size: 16px; font-weight: bold;">${
                  typeof result === 'string' ? 'No data' : result.koreanName
                }</div>
                <div>인구: ${
                  typeof result === 'string'
                    ? 'No data'
                    : result.population.toLocaleString()
                }</div>
                <div>
                  방문자수: ${
                    typeof result === 'string' ? 'No data' : result.visitors
                  }
                </div>
              `
              )
              .style('left', `${event.pageX}px`)
              .style('top', `${event.pageY}px`);

            d3.selectAll('.Country')
              .transition()
              .duration(200)
              .style('opacity', 0.5);
            d3.select(this)
              .transition()
              .duration(200)
              .style('opacity', 1)
              .style('stroke', 'black');
          })
          .on('mouseleave', function () {
            d3.select(tooltipRef.current).style('opacity', 0);

            d3.selectAll('.Country')
              .transition()
              .duration(200)
              .style('opacity', 0.8);
            d3.select(this)
              .transition()
              .duration(200)
              .style('stroke', 'transparent');
          });
      }
    };

    fetchData();

    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg.style('background-color', '#1835D0');
    }

    // 사이즈 조정
    window.addEventListener('resize', () => {
      if (svgRef.current) {
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();
        fetchData();
      }
    });

    return () => {
      window.removeEventListener('resize', () => {
        if (svgRef.current) {
          const svg = d3.select(svgRef.current);
          svg.selectAll('*').remove();
          fetchData();
        }
      });
    };
  }, []);

  return (
    <>
      <svg ref={svgRef} style={{ width: '100%', height: '100vh' }} />
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          padding: '5px',
          backgroundColor: 'white',
          border: '1px solid black',
          borderRadius: '5px',
          opacity: 0,
          pointerEvents: 'none',
          fontSize: '12px',
          color: 'black',
        }}
      ></div>
    </>
  );
};

export default WorldMap;
