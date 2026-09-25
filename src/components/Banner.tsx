import React from 'react';
import Image from 'next/image';
import ImageBanner from '@/assist/banner.png';
const Banner = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto flex justify-between pt-17 pb-10 bg-[#1F2937] p-15 rounded-2xl">
        <div>
          <h2 className="text-[11px] font-bold text-[#C2F800] leading-2 pb-5">
            WORKOUT LIBRARY
          </h2>
          <h1 className="text-[60px] text-[#D1D5DB] mt-2 font-bold leading-tight">
            TRAIN WITH INTENT LOG. <br />
            EVERY SET.
          </h1>
          <p className="text-[#9CA3AF] text-[16px] leading-5 pt-4 pb-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            <br />
            into today's plan, and watch the week's work add up.
          </p>
          <button className="bg-[#C2F800] text-[#000000] text-[12px] font-bold py-3 px-6 rounded-md hover:bg-[#a8d500] transition duration-300">
            BROWSE WORKOUTS
          </button>
        </div>

        <Image src={ImageBanner} alt="Banner" className="mt-6" />
      </div>
    </section>
  );
};

export default Banner;
