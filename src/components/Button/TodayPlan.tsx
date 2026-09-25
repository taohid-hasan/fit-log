'use client';

import React, { useContext } from 'react';
import { AType } from '@/components/type/page';
import { Cardprovider } from '@/context/Cardcontext';

const TodayPlan = ({ exercise }: { exercise: AType }) => {
  const context = useContext(Cardprovider);

  if (!context) return null;

  const { todayPlan, setTodayPlan } = context;

  const handleAddToPlan = () => {
    const alreadyAdded = todayPlan.some(item => item.id === exercise.id);

    if (alreadyAdded) return;
    setTodayPlan(prev => [...prev, exercise]);
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="rounded-md bg-[#d9ff00] px-3 py-2 text-[9px] font-bold text-black"
    >
      ✓ Add to today's plan
    </button>
  );
};

export default TodayPlan;
