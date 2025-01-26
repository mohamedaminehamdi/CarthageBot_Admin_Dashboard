'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 transform hover:scale-105 transition-transform duration-300"
      >
        <h2 className="text-3xl font-extrabold text-blue-500 mb-6 text-center">
          Admin Login
        </h2>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-400 mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-400 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center text-gray-500">
          Forgot your password?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Click here
          </a>
        </p>
      </form>
    </div>
  );
}
