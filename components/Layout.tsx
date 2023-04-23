import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Image from 'next/image';
import { IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';

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
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 pt-4 pb-20 mx-auto">{children}</div>
      </main>
      <div className="bg-black dark:bg-zinc-50 h-56">
        <div className="max-w-5xl h-full px-8 py-4 mx-auto flex justify-center">
          <div className="p-10 flex justify-center items-center">
            <div className="relative w-[75px] h-[75px]">
              <Image
                fill
                alt="dentium tech"
                src={'/images/logo_square.svg'}
              ></Image>
            </div>
          </div>
          <div className="max-w-xs flex justify-start items-center text-white dark:text-black font-bold text-3xl md:text-4xl">
            {`For Dentists,`}
            <br />
            {`By Dentists`}
          </div>
        </div>
      </div>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex">
            <div className="pr-20 md:block hidden">
              <div className="font-bold py-2">덴티움</div>
              <div className="font-light text-zinc-400">
                <Link href={'https://dentium.co.kr/dsn/dentium03_03.php'}>
                  의견 보내기
                </Link>
              </div>
              <div className="font-light text-zinc-400">
                <Link href={'https://dentium.ninehire.site'}>
                  채용 바로가기
                </Link>
              </div>
            </div>
            <div className="pr-20 md:block hidden">
              <div className="font-bold py-2">제노스</div>
              <div className="font-light text-zinc-400">
                <Link
                  href={'http://www.genoss.com/bbs/write.php?bo_table=s05_p111'}
                >
                  의견 보내기
                </Link>
              </div>
              <div className="font-light text-zinc-400">
                <Link
                  href={'http://www.genoss.com/bbs/board.php?bo_table=recruit'}
                >
                  채용 바로가기
                </Link>
              </div>
            </div>
            <div className="pr-20 md:block hidden">
              <div className="font-bold py-2">고객센터</div>
              <div className="font-light text-zinc-400">
                덴티움: 080-050-2875
              </div>
              <div className="font-light text-zinc-400">
                덴티움몰: 080-050-2875
              </div>
              <div className="font-light text-zinc-400">
                덴티움 아카데미: 070-7098-9189
              </div>
              <div className="font-light text-zinc-400">
                디지털센터: 070-7098-9081
              </div>
            </div>
            <div className="pr-20 ">
              <div className="font-bold py-2">더브라이트(theBright)</div>
              <div className="font-light text-zinc-400">
                덴티움 기술 블로그 운영진
              </div>
              <div className="font-light text-zinc-400">
                mail to: wwoo@dentium.com
              </div>
            </div>
          </div>
          <div className="font-bold text-md pt-6">(주)덴티움</div>
          <div className="text-sm py-2">
            Copyright © Dentium, Inc. All Rights Reserved.
          </div>
          <div className="flex py-10">
            {/* <Link target="_blank" href={"https://www.instagram.com/dentium_korea"} className='bg-zinc-100 w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-200 transition duration-200 ease-in-out'><IconBrandFacebookFilled size={30} stroke={1} fillOpacity={0.3}/></Link>
            <Link target="_blank" href={"https://www.instagram.com/dentium_korea"} className='bg-zinc-100 w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-200 transition duration-200 ease-in-out'><IconBrandTwitterFilled size={30} stroke={1} fillOpacity={0.3}/></Link> */}
            <Link
              target="_blank"
              href={'https://www.instagram.com/dentium_korea'}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
            >
              <IconBrandInstagram color='white' size={30} stroke={1} opacity={1} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
