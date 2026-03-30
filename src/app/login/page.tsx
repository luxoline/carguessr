'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { authService } from '@/services/authService';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  
  const { setUser } = useUserStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingLocal(true);
    setError(null);
    try {
      const user = await authService.login({ email, password });
      setUser(user);
      router.push('/profile');
    } catch {
      setError('Failed to login. Please check your credentials and try again.');
    } finally {
      setIsLoadingLocal(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-2 text-center">Welcome Back</h1>
        <p className="text-slate-400 text-center mb-6 text-sm">Sign in to track your stats</p>
        
        {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-4 text-sm">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              required
            />
          </div>
          <Button type="submit" className="w-full mt-6" size="lg" disabled={isLoadingLocal}>
            {isLoadingLocal ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account? <span className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">Register (Not Implemented)</span>
        </div>
      </div>
    </div>
  );
}
