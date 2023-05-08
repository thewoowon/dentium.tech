import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="relative w-[243px] h-[33px]">
        <Link href={'/'}>
          <Image
            className="cursor-pointer"
            fill
            alt="dentium tech"
            src={'/images/logo.svg'}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
