'use client';
import React from 'react';
import { useUserStore } from '@/store/userStore';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService';

export default function ProfilePage() {
  const { user, isLoggedIn, logout, setUser } = useUserStore();
  const router = useRouter();
  const hasFetchedRef = React.useRef(false);

  React.useEffect(() => {
    if (isLoggedIn && !hasFetchedRef.current) {
      hasFetchedRef.current = true;
      authService.getCurrentUser().then((freshUser) => {
        setUser(freshUser);
      }).catch(err => console.error("Failed to fetch fresh user data", err));
    }
  }, [isLoggedIn, setUser]);

  if (!isLoggedIn || !user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <p className="text-slate-400 mb-4">Please log in to view your profile.</p>
        <Button onClick={() => router.push('/login')}>Go to Login</Button>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full pt-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <Button variant="outline" size="sm" onClick={handleLogout}>Sign Out</Button>
      </div>
      
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
          <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold text-white uppercase shadow-inner">
            {(user.userName || user.username || 'U').charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{user.userName || user.username}</h2>
            <p className="text-slate-400">ID: {user.id}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 p-4 rounded-lg text-center shadow-inner">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Total Score</div>
            <div className="text-3xl font-bold text-indigo-400">{user.totalPoint || 0}</div>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg text-center shadow-inner">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Game Money</div>
            <div className="text-3xl font-bold text-emerald-400">{user.gameMoney || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
