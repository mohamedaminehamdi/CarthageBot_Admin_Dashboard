'use client';

import { useRouter } from 'next/navigation';
import { HiChat, HiChartBar, HiBell } from 'react-icons/hi';

export default function HomePage() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <header className="text-center mb-12">
      <div
    className="w-16 h-16 bg-[#34495E] rounded-full flex justify-center items-center mx-auto mb-4"
    style={{
      backgroundImage: 'url(./logo.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Logo as background */}
  </div>
        <h1 className="text-5xl font-extrabold mb-4 text-blue-500">Admin Dashboard</h1>
        <p className="text-lg text-gray-400">
          Manage your chatbot, analyze insights, and monitor activity with ease.
        </p>
      </header>

      <main className="w-full max-w-6xl px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <HiChat className="text-4xl mb-4 text-blue-500" />
            <h2 className="text-3xl font-semibold mb-4 text-white">Chatbot Management</h2>
            <p className="text-md text-gray-400">
              Manage your chatbot's conversations, responses, and training data.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <HiChartBar className="text-4xl mb-4 text-blue-500" />
            <h2 className="text-3xl font-semibold mb-4 text-white">Metrics & Insights</h2>
            <p className="text-md text-gray-400">
              Analyze user engagement, question frequency, and chatbot performance.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <HiBell className="text-4xl mb-4 text-blue-500" />
            <h2 className="text-3xl font-semibold mb-4 text-white">Notifications</h2>
            <p className="text-md text-gray-400">
              Stay updated with alerts about user interactions and chatbot activity.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-12">
        <button
          onClick={navigateToLogin}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </footer>
    </div>
  );
}
