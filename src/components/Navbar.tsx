
'use client';
import { useContext } from 'react';
import { Cardprovider } from '@/context/Cardcontext';
import Image from 'next/image';
import Link from 'next/link';
import ImageLogo from '@/assist/logo.png';

const Navbar = () => {
  const context = useContext(Cardprovider);
  const planCount = context?.todayPlan.length ?? 0;
  const savedCount = context?.saved.length ?? 0;

  const links = {
    workout: '/workouts',
    myplan: '/myplan',
  };
  return (
    <div>
      <section className="container mx-auto">
        <nav className="flex justify-between items-center py-5 px-1">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Link href="/">
              <Image src={ImageLogo} alt="Logo" />
            </Link>

            <h1 className="text-[18px] text-[#FFFFFF] leading-5">FITLOG</h1>
          </div>

          {/* Navigation */}
          <ul className="flex items-center gap-6">
            <li className="text-[12px] text-[#9CA3AF] leading-3 font-medium">
              <Link href={links.workout}>Workouts</Link>
            </li>

            <li className="text-[12px] text-[#9CA3AF] leading-3 font-medium">
              <Link href={links.myplan}>My Plan</Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-2.5">
            <Link href={links.myplan}>
              <button className="text-[12px] font-medium leading-2.5 text-[#D1D5DB] py-2 px-4 flex items-center gap-1.5">
                Plan{' '}
                <span className="bg-[#A3E635] text-black text-[11px] font-bold rounded-full px-1.5">
                  {planCount}
                </span>
              </button>
            </Link>
            <Link href={links.myplan}>
              <button className="text-[12px] font-medium leading-2.5 text-[#D1D5DB] py-2 px-4 flex items-center gap-1.5">
                Saved{' '}
                <span className="bg-[#A3E635] text-black text-[11px] font-bold rounded-full px-1.5">
                  {savedCount}
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
