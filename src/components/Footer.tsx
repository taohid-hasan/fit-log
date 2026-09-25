import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageLogo from '@/assist/logo.png';

const Footer = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between items-center py-5 px-3">
        <div className="flex items-center gap-2.5">
          <Link href="/">
            <Image src={ImageLogo} alt="Logo" />
          </Link>

          <h1 className="text-[18px] text-[#FFFFFF] leading-5">FITLOG</h1>
        </div>

        <div>
          <h3 className="text-[12px] font-normal text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Footer;
