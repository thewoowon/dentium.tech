import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { NaverAnalytics } from '@/components/analytics/NaverAnalytics';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <GoogleAnalytics/>
      <NaverAnalytics/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
