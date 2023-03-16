import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import {IconBrandFacebookFilled, IconBrandTwitterFilled, IconBrandInstagram} from '@tabler/icons-react';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://dentium.tech';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 pt-4 pb-20 mx-auto">{children}</div>
      </main>
      <div className="bg-black h-56">
        <div className="max-w-5xl h-full px-8 py-4 mx-auto flex justify-center">
          <div className="p-10 flex justify-center items-center">
            <div className="relative w-[75px] h-[75px]">
              <Image
                layout="fill"
                alt="dentium tech"
                src={'/images/logo_square.svg'}
              ></Image>
            </div>
          </div>
          <div className="max-w-xs flex justify-start items-center text-white font-bold text-4xl">
            {`For Dentists,`}
            <br />
            {`By Dentists`}
          </div>
        </div>
      </div>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          <div className='flex'>
            <div className='pr-20'>
              <div className='font-bold py-2'>덴티움</div>
              <div className='font-light text-zinc-400'>의견 보내기</div>
            </div>
            <div className='pr-20'>
              <div className='font-bold py-2'>제노스</div>
              <div className='font-light text-zinc-400'>의견 보내기</div>
            </div>
            <div className='pr-20'>
              <div className='font-bold py-2'>고객센터</div>
              <div className='font-light text-zinc-400'>전화: 018-1234-1234</div>
              <div className='font-light text-zinc-400'>이메일: dentium_official@dentium.com</div>
            </div>
          </div>
          <div className='font-bold text-md pt-6'>(주)덴티움</div>
          <div className='text-sm py-2'>Copyright © Dentium, Inc. All Rights Reserved.</div>
          <div className='flex py-10'>
            <div className='bg-zinc-100 w-10 h-10 rounded-full flex justify-center items-center mr-3'><IconBrandFacebookFilled size={30} stroke={1} fillOpacity={0.3}/></div>
            <div className='bg-zinc-100 w-10 h-10 rounded-full flex justify-center items-center mr-3'><IconBrandTwitterFilled size={30} stroke={1} fillOpacity={0.3}/></div>
            <div className='bg-zinc-100 w-10 h-10 rounded-full flex justify-center items-center mr-3'><IconBrandInstagram size={30} stroke={1} opacity={0.3}/></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
