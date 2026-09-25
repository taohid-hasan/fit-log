'use client';

import React, { useContext } from 'react';
import { AType } from '@/components/type/page';
import { Cardprovider } from '@/context/Cardcontext';

const Saved = ({ exercise }: { exercise: AType }) => {
  const context = useContext(Cardprovider);

  if (!context) return null;

  const { saved, setSaved } = context;

  const handleSave = () => {
    const alreadySaved = saved.some(item => item.id === exercise.id);

    if (alreadySaved) return;
    setSaved(prev => [...prev, exercise]);
  };

  return (
    <button
      onClick={handleSave}
      className="rounded-md border border-[#383d46] px-3 py-2 text-[9px] text-gray-300"
    >
      ♡ Save for later
    </button>
  );
};

export default Saved;
