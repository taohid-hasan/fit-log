import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AType } from '@/components/type/page';


const getWorkouts = async (): Promise<AType[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  if (!res.ok) {
    throw new Error('Failed to fetch workouts');
  }

  const data: AType[] = await res.json();

  return data;
};

const workoutsPage = async () => {
  const workouts = await getWorkouts();

  return (
    <>
      <section className="bg-[#111214] py-10">
        <div className="container mx-auto px-6">
          <div className="mb-5">
            <h2 className="text-[#FFFFFF] text-[30px] font-bold">
              THE LIBRARY
            </h2>

            <p className="text-[#9CA3AF] text-[14px] font-normal mt-1">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workouts.map(workout => (
              <Link
                key={workout.id}
                href={`/workouts/${workout.id}`}
                className="bg-[#16181D] rounded-lg overflow-hidden block hover:scale-[1.02] transition duration-200"
              >
                <div className="relative w-full h-[180px]">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3">
                  <div className="flex gap-2 mb-2 mt-1">
                    {workout.muscleGroups.map(muscle => (
                      <span
                        key={muscle}
                        className="bg-[#C2F800] text-black text-[11px] font-bold px-2 py-[2px] rounded-full"
                      >
                        {muscle.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white text-[18px] font-bold uppercase">
                    {workout.name}
                  </h3>

                  <p className="text-[#9CA3AF] text-[12px] font-normal mt-1">
                    {workout.equipment}
                  </p>

                  <div className="border-t border-[#24262C] mt-4 pt-2 flex items-center gap-4">
                    <span className="text-[#9CA3AF] text-[12px] font-normal">
                      ◷ {workout.duration} min
                    </span>

                    <span className="text-[#9CA3AF] text-[12px] font-normal">
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span className="text-[#9CA3AF] text-[12px] font-normal">
                      ★ {workout.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default workoutsPage;
