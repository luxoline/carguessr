import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            CarGuessr
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Test your automotive knowledge. Can you identify the car model from just a single part?
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Link href="/game?mode=solo" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-64 text-xl shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]">
              Solo Mode
            </Button>
          </Link>
          <Link href="/game?mode=competitive" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-64 text-xl">
              Competitive
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
