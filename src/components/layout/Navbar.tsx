'use client';
import React from 'react';
import Link from 'next/link';
import { useUserStore } from '@/store/userStore';

export const Navbar: React.FC = () => {
  const { isLoggedIn, user } = useUserStore();
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          CarGuessr
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/leaderboard" className="text-slate-300 hover:text-white transition-colors">
            Leaderboard
          </Link>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link href="/profile" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white uppercase">
                  {(user?.userName || user?.username || 'U').charAt(0)}
                </div>
                <span className="hidden sm:inline-block font-medium">{user?.userName || user?.username}</span>
              </Link>
            </div>
          ) : (
            <Link href="/login" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
