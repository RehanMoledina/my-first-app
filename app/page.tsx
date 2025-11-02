'use client';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 font-sans">
      <h1 className="text-5xl md:text-6xl font-bold text-white shadow-lg mb-4">
        Habit Tracker
      </h1>
      <p className="text-lg md:text-xl text-white mb-8 max-w-xl text-center">
        Build better habits, one day at a time. Track your progress and achieve your goals with our simple, beautiful habit tracking app.
      </p>
      <a
        href="#"
        className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-50 transition-colors text-lg"
      >
        Get Started
      </a>
    </div>
  );
}
