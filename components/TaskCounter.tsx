'use client';

import { useState } from 'react';

export default function TaskCounter() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(10);
  const [goalInput, setGoalInput] = useState('10');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGoalInput(value);
    
    // Only update goal if it's a valid positive number
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue > 0) {
      setGoal(numValue);
    }
  };

  const handleGoalBlur = () => {
    // Validate on blur and ensure minimum of 1
    const numValue = parseInt(goalInput);
    if (isNaN(numValue) || numValue < 1) {
      setGoalInput(goal.toString());
      setGoal(Math.max(1, goal));
    } else {
      setGoalInput(numValue.toString());
      setGoal(numValue);
    }
  };

  const isGoalReached = count >= goal && goal > 0;

  return (
    <div className={`bg-white bg-opacity-95 rounded-xl shadow-xl p-8 flex flex-col items-center gap-6 min-w-[320px] max-w-md transition-all duration-500 ${isGoalReached ? 'ring-4 ring-green-400 ring-opacity-75' : ''}`}>
      {/* Goal Input */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Task Goal:
        </label>
        <input
          type="number"
          value={goalInput}
          onChange={handleGoalChange}
          onBlur={handleGoalBlur}
          min="1"
          className="px-4 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none text-center text-lg font-semibold text-purple-700"
        />
      </div>

      {/* Progress Display */}
      <div className="w-full text-center">
        <div className="text-sm text-gray-600 mb-2">
          Progress: {count} / {goal}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isGoalReached ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-purple-400 to-purple-600'
            }`}
            style={{ width: `${Math.min(100, (count / goal) * 100)}%` }}
          />
        </div>
      </div>

      {/* Congratulations Message */}
      {isGoalReached && (
        <div className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg animate-pulse text-center">
          🎉 Congratulations! Goal Reached! 🎉
        </div>
      )}

      {/* Count Display */}
      <div className={`text-7xl font-bold mb-6 transition-all duration-500 ${
        isGoalReached ? 'text-green-600' : 'text-purple-600'
      }`}>
        {count}
      </div>
      
      {/* Buttons */}
      <div className="flex gap-4 w-full justify-center">
        <button
          onClick={handleIncrement}
          className={`px-8 py-3 text-white font-semibold rounded-lg shadow-md active:scale-95 transition-all duration-200 transform hover:scale-105 ${
            isGoalReached
              ? 'bg-green-600 hover:bg-green-700 active:bg-green-800'
              : 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800'
          }`}
          aria-label="Increment counter"
        >
          Increment
        </button>
        <button
          onClick={handleReset}
          disabled={count === 0}
          className="px-8 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 active:bg-gray-500 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Reset counter"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
