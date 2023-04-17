import Script from "next/script";
import * as naver from '@/lib/naver';

export const NaverAnalytics = () => {
  return (
    <>
      <meta name="naver-site-verification" content={naver.NAVER_TRACKING_ID}/>
      <Script
        strategy="afterInteractive"
        src="//wcs.naver.net/wcslog.js"
      ></Script>
      <Script
        id="naver-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              if(!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "${naver.NAVER_TRACKING_ID}";
              if(window.wcs) {
                wcs_do();
              }
            `,
        }}
      />
    </>
  );
};
