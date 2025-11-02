'use client';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 font-sans"
    >
      <h1 className="text-6xl font-bold text-white shadow-lg">
        My First Web App
      </h1>
      <button
        onClick={handleClick}
        className="mt-8 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-50 transition-colors"
      >
        Click Me
      </button>
    </div>
  );
}
