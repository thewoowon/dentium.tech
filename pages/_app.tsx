import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { NaverAnalytics } from '@/components/analytics/NaverAnalytics';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GoogleAnalytics />
      <NaverAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
