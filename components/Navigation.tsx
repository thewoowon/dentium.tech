import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconRss } from '@tabler/icons-react';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="relative w-[203px] h-[28px]">
        <Link href={'/'}>
          <Image
            className="cursor-pointer"
            fill
            alt="dentium tech"
            src={'/images/logo.svg'}
          />
        </Link>
      </div>
      <div className="p-1 rounded-full hover:bg-slate-200 transition-all ease-in-out duration-200">
        <Link href={'/rss.xml'}>
          <IconRss size={20} color="#fe8308" stroke={4} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
