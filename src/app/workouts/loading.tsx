import React from 'react';

const loading = () => {
  return (
    <main className="min-h-screen bg-[#111214] px-4 py-7 sm:px-6 sm:py-10">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <div className="h-8 w-40 animate-pulse rounded bg-[#252830] sm:h-9 sm:w-48"></div>
          <div className="mt-3 h-4 w-64 animate-pulse rounded bg-[#252830] sm:w-80"></div>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div key={item} className="overflow-hidden rounded-lg bg-[#16181D]">
              {/* Image Skeleton */}
              <div className="h-[190px] w-full animate-pulse bg-[#252830] sm:h-[180px]"></div>

              <div className="p-3 sm:p-4">
                {/* Muscle Tags */}
                <div className="mb-3 flex gap-2">
                  <div className="h-5 w-16 animate-pulse rounded-full bg-[#252830]"></div>
                  <div className="h-5 w-20 animate-pulse rounded-full bg-[#252830]"></div>
                </div>

                {/* Workout Name */}
                <div className="h-5 w-3/4 animate-pulse rounded bg-[#252830]"></div>

                {/* Equipment */}
                <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-[#252830]"></div>

                {/* Btn */}
                <div className="mt-4 flex flex-wrap gap-4 border-t border-[#24262C] pt-3">
                  <div className="h-4 w-20 animate-pulse rounded bg-[#252830]"></div>
                  <div className="h-4 w-24 animate-pulse rounded bg-[#252830]"></div>
                  <div className="h-4 w-12 animate-pulse rounded bg-[#252830]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default loading;