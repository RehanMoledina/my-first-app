'use client';

import { useEffect, useState } from 'react';

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const isPast = total <= 0;
  const seconds = isPast ? 0 : Math.floor((total / 1000) % 60);
  const minutes = isPast ? 0 : Math.floor((total / 1000 / 60) % 60);
  const hours = isPast ? 0 : Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = isPast ? 0 : Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds, isPast };
}

function CountdownTimer() {
  const targetDate = new Date('2025-11-03T14:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    if (timeLeft.isPast) return;
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft.isPast, targetDate]);

  return (
    <div className="mt-2 flex flex-col items-center">
      <div className="text-white text-lg font-medium bg-purple-700 bg-opacity-70 px-4 py-2 rounded-lg shadow-md inline-flex gap-2">
        <span>Countdown to 2PM, 3rd November 2025:</span>
        {timeLeft.isPast ? (
          <span className="ml-2 font-bold text-rose-200">Event Started!</span>
        ) : (
          <span className="ml-2 font-bold text-white">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 font-sans">
      {/* Move the CountdownTimer to the very top */}
      <CountdownTimer />
      <h1 className="text-5xl md:text-6xl font-bold text-white shadow-lg mb-4">
        Habit Tracker
      </h1>
      <p className="text-lg md:text-xl text-white mb-8 max-w-xl text-center">
        Build better habits, one day at a time. Track your progress and achieve your goals with our simple, beautiful habit tracking app.
      </p>
      <a
        href="#"
        className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-50 transition-colors text-lg mb-12"
      >
        Get Started
      </a>
      {/* Feature cards section */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full px-4">
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">📈</span>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Track Your Progress</h2>
            <p className="text-gray-700 text-center">
              Visualize your habit streaks and accomplishments, so you stay motivated on your journey.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">⏰</span>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Build Consistency</h2>
            <p className="text-gray-700 text-center">
              Set daily and weekly goals, and enjoy gentle reminders to help consistency become second nature.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-3">🎯</span>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Achieve Your Goals</h2>
            <p className="text-gray-700 text-center">
              Turn small changes into big results by celebrating milestones as you reach new heights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
