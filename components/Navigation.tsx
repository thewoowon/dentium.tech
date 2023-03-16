import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  const { theme, resolvedTheme } = useTheme();
  return (
    <nav className="flex justify-between items-center">
      <div className="relative w-[243px] h-[33px]">
        <Link href={'/'}>
          {theme === 'dark' || resolvedTheme === 'dark' ? (
            <Image
            className="cursor-pointer"
            layout="fill"
            alt="dentium tech"
            src={'/images/logo_white.svg'}
          />
          ) : (
            <Image
            className="cursor-pointer"
            layout="fill"
            alt="dentium tech"
            src={'/images/logo.svg'}
          />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
