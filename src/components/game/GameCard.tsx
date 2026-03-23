import React from 'react';
import Image from 'next/image';

interface GameCardProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

export const GameCard: React.FC<GameCardProps> = ({ imageUrl, imageAlt, children }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="relative w-full aspect-[16/9] bg-slate-800">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={imageAlt} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-500">
            Image not found
          </div>
        )}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
