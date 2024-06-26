import { useEffect } from 'react';
import anime from 'animejs';

const BrowserRank = () => {
  useEffect(() => {
    // Anime.js 스크립트 동적 로드
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.onload = () => {
      anime({
        targets: '#Layer_1',
        rotate: '5turn',
        duration: 3000,
        delay: 500,
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate',
      });

      // linearGradient 애니메이션
      anime({
        targets: '#SVGID_1_ stop',
        stopColor: '#000000',
        duration: 2000,
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate',
      });
    };
    document.body.appendChild(script);

    // 컴포넌트 언마운트 시 스크립트 제거
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <svg
        enableBackground="new 0 0 24 24"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M7,12c0-2.7614136,2.2385864-5,5-5c0.7705078,0,1.4915771,0.1887207,2.1434326,0.5h8.9761353   C21.338562,3.1040039,17.03479,0,12,0C8.1478271,0,4.7286987,1.8223267,2.53302,4.6439209l4.5093994,7.7771606   C7.0304565,12.2799683,7,12.1442261,7,12z"
            fill="#F44336"
          />
          <path
            d="M12,17c-2.6171875,0-4.7403564-2.0178833-4.9575806-4.5789185L2.53302,4.6439209   C0.9511719,6.6766968,0,9.2247314,0,12c0,6.0725098,4.5148926,11.0784302,10.3684082,11.8762817l4.4510498-7.75   C14.0164185,16.6760864,13.0466919,17,12,17z"
            fill="#00B060"
          />
          <path
            d="M14.1434326,7.5C15.8276367,8.3043823,17,10.0090942,17,12   c0,1.7147217-0.8649902,3.2255249-2.180542,4.1262817l-4.4510498,7.75C10.9033203,23.9492188,11.4450684,24,12,24   c6.6274414,0,12-5.3726196,12-12c0-1.5926514-0.3170776-3.109436-0.8804321-4.5H14.1434326z"
            fill="#FFC107"
          />
          <circle cx="12" cy="12" fill="#2196F3" id="XMLID_1302_" r="4" />
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="SVGID_1_"
            x1="16.3874664"
            x2="20.8755341"
            y1="5.2559662"
            y2="9.7440338"
          >
            <stop
              offset="0"
              style={{
                stopColor: '#000000',
                stopOpacity: 0.1,
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: '#000000',
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <path
            d="M16.4558716,9.7610474L23.1195679,7.5h-8.9761353   C15.1433716,7.9775391,15.9550171,8.7772827,16.4558716,9.7610474z"
            fill="url(#SVGID_1_)"
          />
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="SVGID_2_"
            x1="1.8841199"
            x2="8.0149345"
            y1="5.2791538"
            y2="11.4099684"
          >
            <stop
              offset="0"
              style={{
                stopColor: '#000000',
                stopOpacity: 0.1,
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: '#000000',
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <path
            d="M7.8330746,9.2605782L2.5431018,4.6201715l4.4880676,7.7735615   C6.9447608,11.288991,7.2315364,10.1862135,7.8330746,9.2605782z"
            fill="url(#SVGID_2_)"
          />
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="SVGID_3_"
            x1="10.6388721"
            x2="13.4027376"
            y1="18.0505562"
            y2="20.8144207"
          >
            <stop
              offset="0"
              style={{
                stopColor: '#000000',
                stopOpacity: 0.1,
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: '#000000',
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <path
            d="M11.7110538,16.9783745l-1.373723,6.901453l4.4880676-7.7735596   C13.9118671,16.7334709,12.813446,17.0365047,11.7110538,16.9783745z"
            fill="url(#SVGID_3_)"
          />
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="XMLID_45_"
            x1="1.1217111"
            x2="22.8782883"
            y1="6.9273705"
            y2="17.0726299"
          >
            <stop
              offset="0"
              style={{
                stopColor: '#FFFFFF',
                stopOpacity: 0.2,
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: '#FFFFFF',
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <circle
            cx="12"
            cy="12"
            fill="url(#XMLID_45_)"
            id="XMLID_1304_"
            r="12"
          />
        </g>
      </svg>
    </div>
  );
};

export default BrowserRank;
