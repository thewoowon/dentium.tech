import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { NaverAnalytics } from '@/components/analytics/NaverAnalytics';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <Head>
        <title>덴티움 기술블로그</title>
      </Head>
      <GoogleAnalytics />
      <NaverAnalytics />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
