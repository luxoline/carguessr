import React from 'react';

export default function LeaderboardPage() {
  const players = [
    { rank: 1, name: 'TurboRacer', score: 9500 },
    { rank: 2, name: 'V8Lover', score: 8200 },
    { rank: 3, name: 'DriftKing', score: 7800 },
    { rank: 4, name: 'GearHead123', score: 6500 },
    { rank: 5, name: 'SpeedyGonzales', score: 6100 },
  ];

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
            {players.map((p) => (
              <tr key={p.rank} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-4 text-indigo-400 font-bold">#{p.rank}</td>
                <td className="p-4 text-white font-medium">{p.name}</td>
                <td className="p-4 text-emerald-400 font-bold text-right">{p.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
