'use client';

import TaskCounter from '@/components/TaskCounter';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 font-sans">
      <h1 className="text-5xl md:text-6xl font-bold text-white shadow-lg mb-8">
        Daily Task Counter
      </h1>
      <TaskCounter />
    </div>
  );
}
