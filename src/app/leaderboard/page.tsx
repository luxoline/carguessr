'use client';
import React, { useEffect, useState } from 'react';
import { leaderboardService } from '@/services/leaderboardService';
import { LeaderboardEntry } from '@/types';

export default function LeaderboardPage() {
  const [players, setPlayers] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await leaderboardService.getLeaderboard(0, 10);
        setPlayers(response.items || []);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full pt-12">
      <h1 className="text-3xl font-bold text-white mb-8">Leaderboard</h1>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <table className="w-full text-left">
          <thead className="bg-slate-800/50 border-b border-slate-800">
            <tr>
              <th className="p-4 font-semibold text-slate-400">Rank</th>
              <th className="p-4 font-semibold text-slate-400">Player</th>
              <th className="p-4 font-semibold text-slate-400 text-right">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {isLoading ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-400">Loading...</td>
              </tr>
            ) : players.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-400">No data available</td>
              </tr>
            ) : (
              players.map((p, index) => (
                <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-indigo-400 font-bold">#{p.rank}</td>
                  <td className="p-4 text-white font-medium">{p.userName}</td>
                  <td className="p-4 text-emerald-400 font-bold text-right">{p.totalScored}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
