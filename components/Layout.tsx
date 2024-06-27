import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import {
  IconBrandInstagram,
  IconHome,
  IconNetwork,
  IconMenu2,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Notice from './Notice';
import SimpleBanner from './SimpleBanner';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styled from '@emotion/styled';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://dentium.tech';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const menuList = [
    { name: '아티클', path: '/' },
    { name: '인터뷰', path: '/interviews' },
    { name: '인포그래픽', path: '/infographics' },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuList.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(`${menu.path}`);
              }}
            >
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="fixed w-full bg-white z-50">
        {/* <div>
          <div className="bg-black dark:bg-zinc-50 h-64 flex justify-center items-center">
            <Image
              width={500}
              height={300}
              alt="dentium tech"
              src={'/images/dentech_typo.png'}
              priority
            />
          </div>
        </div> */}
        <div className="max-w-[1140px] mx-auto h-[60px] max-h-[60px] flex items-center justify-between">
          <NavigationContainer className="flex items-center justify-start py-3 gap-8">
            <Navigation />

            <LinkContainer>
              <Link
                href={'/'}
                aria-label="article"
                className="text-black hover:text-zinc-700 font-semibold"
                style={{ fontSize: '1rem' }}
              >
                아티클
              </Link>
              <Link
                href={'/interviews'}
                aria-label="article"
                className="text-black hover:text-zinc-700 font-semibold"
                style={{ fontSize: '1rem' }}
              >
                인터뷰
              </Link>
              <Link
                href={'/infographics'}
                aria-label="article"
                className="text-black hover:text-zinc-700 font-semibold"
                style={{ fontSize: '1rem' }}
              >
                인포그래픽
              </Link>
            </LinkContainer>
            <Hamburger
              onClick={() => {
                setState(true);
              }}
            >
              <IconMenu2 size={30} color="#000" stroke={3} opacity={1} />
            </Hamburger>
          </NavigationContainer>
        </div>
        <SwipeableDrawer
          anchor={'right'}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </header>
      <main
        className="pt-[60px] px-[20px]"
        style={{
          backgroundColor: router.pathname === '/' ? 'inherit' : '#fff',
        }}
      >
        {router.pathname === '/' && <Notice />}
        {router.pathname === '/' && <SimpleBanner />}
        <div className="flex flex-col max-w-[1920px] justify-center items-center relative mx-auto">
          {/* {router.pathname === '/' && <Banner />} */}
        </div>
        {children}
      </main>
      {/* <div className="bg-zinc-50 dark:bg-zinc-50 h-56 ">
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
      </div> */}
      <footer className="py-8 bg-white">
        <div className="max-w-5xl px-8 mx-auto">
          <div>
            <div className="font-bold py-2">에니그마(ENIGMA)</div>
            <div>덴티움 기술 블로그 운영진</div>
            <div>운영 리더: 우원</div>
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

// className="flex items-center justify-start py-3 gap-8"
const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.75rem 0;
  gap: 2rem;
  @media (max-width: 768px) {
    justify-content: space-between !important;
    padding: 0.75rem 1rem !important;
  }
`;

// 태블릿 이하에서 보여지는 메뉴
const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
