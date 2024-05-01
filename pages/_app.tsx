import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { NaverAnalytics } from '@/components/analytics/NaverAnalytics';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Toaster } from 'react-hot-toast';

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <Head>
        <title>덴티움 기술블로그</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GoogleAnalytics />
      <NaverAnalytics />
      <Component {...pageProps} />
      <Toaster />
    </RecoilRoot>
  );
};

export default MyApp;
