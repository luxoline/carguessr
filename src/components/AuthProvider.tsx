'use client';
import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { authService } from '@/services/authService';
import { tokenManager } from '@/services/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, logout, setLoading } = useUserStore();

  useEffect(() => {
    const initAuth = async () => {
      const token = tokenManager.getToken();
      if (!token) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const user = await authService.getCurrentUser();
        setUser(user);
      } catch (error) {
        console.error('Failed to authenticate:', error);
        logout(); // Token might be invalid/expired
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [setUser, logout, setLoading]);

  return <>{children}</>;
}
