import React from 'react';

interface ScoreBoardProps {
  score: number;
  totalQuestions: number;
  currentIndex: number;
  mode: 'solo' | 'competitive';
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, totalQuestions, currentIndex, mode }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-6 flex items-center justify-between bg-slate-800/50 rounded-xl p-4 border border-slate-700 backdrop-blur-md">
      <div>
        <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Mode</span>
        <div className="text-white font-medium capitalize">{mode}</div>
      </div>
      <div className="text-center">
        <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Question</span>
        <div className="text-white font-medium">
          {currentIndex + 1} <span className="text-slate-500">/ {totalQuestions}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Score</span>
        <div className="text-emerald-400 font-bold text-xl">{score}</div>
      </div>
    </div>
  );
};
