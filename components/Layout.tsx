import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Image from 'next/image';
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconHome,
  IconNetwork,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Banner from './Banner';
import Notice from './Notice';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://dentium.tech';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div>
          <div className="bg-black dark:bg-zinc-50 h-64 flex justify-center items-center">
            <Image
              width={500}
              height={300}
              alt="dentium tech"
              src={'/images/dentech_typo.png'}
              priority
            />
          </div>
        </div>
        <div className="max-w-[1024px] mx-auto">
          <div className="flex items-center justify-between py-3">
            <Navigation />
          </div>
        </div>
      </header>
      <main
        style={{
          backgroundColor: router.pathname === '/' ? 'inherit' : '#fff',
        }}
      >
        {router.pathname === '/' && <Notice />}
        <div className="flex flex-col max-w-[1920px] justify-center items-center relative mx-auto">
          {router.pathname === '/' && <Banner />}
          {children}
        </div>
      </main>
      <div className="bg-zinc-50 dark:bg-zinc-50 h-56 ">
        <div className="max-w-5xl h-full px-8 py-4 mx-auto flex justify-center">
          <div className="p-5 flex justify-center items-center">
            <div className="relative w-[75px] h-[75px]">
              <Image
                fill
                alt="dentium tech"
                src={'/images/logo_square.svg'}
              ></Image>
            </div>
          </div>
          <div className="max-w-xs flex justify-start items-center text-black dark:text-black font-bold text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {`DENTIUM TECH`}
            <br />
            {`덴티움 기술 블로그`}
          </div>
        </div>
      </div>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          <div>
            <div className="font-bold py-2">에니그마(ENIGMA)</div>
            <div>덴티움 기술 블로그 운영진</div>
            <div>mail to: wwoo@dentium.com</div>
          </div>
          <div className="font-bold text-md pt-6">(주)덴티움</div>
          <div className="text-sm py-2">Copyright 2023. ENIGMA</div>
          <div className="flex py-10">
            <Link
              target="_blank"
              href={'https://www.dentium.co.kr/'}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
              aria-label="home"
            >
              <IconHome color="white" size={30} stroke={1} opacity={1} />
            </Link>
            <Link
              target="_blank"
              href={'https://dentium.ninehire.site/'}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
              aria-label="network"
            >
              <IconNetwork color="white" size={30} stroke={1} opacity={1} />
            </Link>
            <Link
              target="_blank"
              href={'https://www.youtube.com/@dentiumworld'}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
              aria-label="youtube"
            >
              <IconBrandYoutube
                color="white"
                size={30}
                stroke={1}
                opacity={1}
              />
            </Link>
            <Link
              target="_blank"
              href={'https://www.instagram.com/dentium_korea'}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
              aria-label="instagram"
            >
              <IconBrandInstagram
                color="white"
                size={30}
                stroke={1}
                opacity={1}
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
