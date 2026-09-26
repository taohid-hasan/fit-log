'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cardprovider } from '@/context/Cardcontext';

const MYPlanPage = () => {
  const context = useContext(Cardprovider);

  const [sort, setSort] = useState<'duration' | 'calories' | 'name'>(
    'duration',
  );
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

  if (!context) return null;

  const { todayPlan, saved, removeWorkout } = context;

  const currentExercises = activeTab === 'today' ? todayPlan : saved;

  const sortedExercises = [...currentExercises].sort((a, b) => {
    if (sort === 'duration') {
      return a.duration - b.duration;
    }

    if (sort === 'calories') {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.name.localeCompare(b.name);
  });

  const totalMinutes = currentExercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = currentExercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <section className="container mx-auto px-4 py-6">
      <div>
        <h1 className="text-3xl font-bold text-white">MY PLAN</h1>

        <p className="pt-2 text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-3 rounded-xl border border-[#252830] bg-[#111318]">
        <div className="border-r border-[#20232A] px-5 py-4">
          <p className="text-[10px] text-[#6F7682]">Exercises</p>

          <h2 className="mt-1 text-2xl font-bold text-[#C2F800]">
            {currentExercises.length}
          </h2>
        </div>

        <div className="border-r border-[#20232A] px-5 py-4">
          <p className="text-[10px] text-[#6F7682]">Minutes</p>

          <h2 className="mt-1 text-2xl font-bold text-white">{totalMinutes}</h2>
        </div>

        <div className="px-5 py-4">
          <p className="text-[10px] text-[#6F7682]">Calories</p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            {totalCalories}
          </h2>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex overflow-hidden rounded-md border border-[#292D35] bg-[#15171C] text-[10px]">
          <button
            onClick={() => setActiveTab('today')}
            className={`px-5 py-1 ${
              activeTab === 'today'
                ? 'border border-[#283A4A] bg-[#102030] text-[#C2F800]'
                : 'text-[#A1A6AF]'
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`px-5 py-1 ${
              activeTab === 'saved'
                ? 'border border-[#283A4A] bg-[#102030] text-[#C2F800]'
                : 'text-[#A1A6AF]'
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#6F7682]">
          <span>Sort By</span>

          <select
            value={sort}
            onChange={e =>
              setSort(e.target.value as 'duration' | 'calories' | 'name')
            }
            className="rounded-md border border-[#292D35] bg-[#15171C] px-2 py-1 text-[#A1A6AF] outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        {currentExercises.length === 0 ? (
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-lg border border-dashed border-[#242830] bg-[#0D0F13]">
            <h2 className="text-sm font-bold text-white">NOTHING HERE YET</h2>

            <p className="mt-1 text-[10px] text-[#6F7682]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/workouts"
              className="mt-3 rounded-full bg-[#C2F800] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#d4ff32]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedExercises.map(exercise => (
              <div
                key={exercise.id}
                className="w-full rounded-xl border border-[#292D35] bg-[#191C22] px-3 py-3"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-[72px] w-[108px] shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-bold text-white">
                      {exercise.name}
                    </h2>

                    <p className="mt-0.5 text-[11px] text-[#8A92A0]">
                      {exercise.equipment}
                    </p>

                    <div className="mt-1 flex items-center gap-3 text-[10px]">
                      <span className="flex items-center gap-1 text-[#C2F800]">
                        <span>◷</span>
                        {exercise.duration} min
                      </span>

                      <span className="flex items-center gap-1 text-[#C2F800]">
                        <span>♨</span>
                        {exercise.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1 text-[#C2F800]">
                        <span>★</span>
                        {exercise.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <Link
                      href={`/workouts/${exercise.id}`}
                      className="rounded-full border border-[#BFC4CC] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#252830]"
                    >
                      View Details
                    </Link>
                    <button
                      type="button"
                      className="rounded-full bg-[#C2F800] px-4 py-1.5 text-[10px] font-bold text-black transition hover:bg-[#D5FF3D]"
                    >
                      ✓ Mark as Done
                    </button>

                    <button
                      type="button"
                      onClick={e => {
                        e.stopPropagation();
                        removeWorkout(exercise.id, activeTab);
                      }}
                      className="ml-1 text-sm text-[#A1A6AF] hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MYPlanPage;
