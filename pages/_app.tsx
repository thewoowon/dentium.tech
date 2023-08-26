import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { NaverAnalytics } from '@/components/analytics/NaverAnalytics';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <GoogleAnalytics />
      <NaverAnalytics />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
