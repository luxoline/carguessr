'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useGameStore } from '@/store/gameStore';
import { questionService } from '@/services/questionService';
import { GameMode, DifficultyLevel } from '@/types';
import { GameCard } from '@/components/game/GameCard';
import { ScoreBoard } from '@/components/game/ScoreBoard';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

function GameContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modeParam = searchParams?.get('mode') as GameMode | null;
  const mode = modeParam ?? 'solo';

  
  const { 
    questions, 
    currentQuestionIndex, 
    score, 
    isGameOver,
    isLoading,
    selectedAnswer,
    sessionGuid,
    setMode,
    setQuestions,
    selectAnswer,
    nextQuestion,
    resetGame,
    setLoading,
    setSessionGuid,
  } = useGameStore();

  const [showResult, setShowResult] = useState(false);
  // İlk yüklemede, global state'te kalan eski oyunun 'bitti' bilgisini kullanarak sahte bir end-game atmamak için ref true başlar.
  const sessionEndedRef = useRef(true);

  // Oyun başlangıcı: session aç, soruları çek
  useEffect(() => {
    const initGame = async () => {
      resetGame();
      setMode(mode);
      setLoading(true);
      try {
        // start-game-session → GUID ve soruları al
        const sessionResponse = await questionService.startGameSession({
          questionLimit: 4,
          timeForEveryQuestion: 30,
          difficultyLevel: DifficultyLevel.Medium,
        });
        
        setSessionGuid(sessionResponse.sessionGuid);
        setQuestions(sessionResponse.questions);
        
        // Sadece yeni oyun başlatıldığında oyun bitişini kabule açıyoruz.
        sessionEndedRef.current = false;
      } catch (err) {
        console.error('Game init failed:', err);
      } finally {
        setLoading(false);
      }
    };
    initGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // Oyun sonu: end-game-session ile skoru kaydet
  useEffect(() => {
    if (isGameOver && sessionGuid && !sessionEndedRef.current) {
      sessionEndedRef.current = true;
      questionService
        .endGameSession({ guid: sessionGuid, totalScore: score })
        .catch((err) => console.error('end-game-session failed:', err));
    }
  }, [isGameOver, sessionGuid, score]);

  if (isLoading || questions.length === 0) {
    return <div className="flex-1 flex items-center justify-center text-slate-400">Loading game...</div>;
  }

  if (isGameOver) {
    return (
      <Modal isOpen={true} onClose={() => router.push('/')} title="Oyun Bitti!">
        <div className="text-center space-y-6 py-4">
          <div className="text-6xl font-bold text-indigo-400">{score}</div>
          <p className="text-slate-300">Final Skor</p>
          {sessionGuid && (
            <p className="text-xs text-slate-500 font-mono">Session: {sessionGuid}</p>
          )}
          <div className="pt-4 flex gap-4 justify-center">
            <Button onClick={() => window.location.reload()}>Tekrar Oyna</Button>
            <Button variant="outline" onClick={() => router.push('/')}>Ana Sayfa</Button>
          </div>
        </div>
      </Modal>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answerId: number) => {
    if (selectedAnswer || showResult) return;
    
    selectAnswer(answerId);
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      nextQuestion();
    }, 1500);
  };

  return (
    <div className="flex-1 p-4 md:p-8 flex flex-col pt-12 max-w-4xl mx-auto w-full">
      <ScoreBoard 
        score={score} 
        totalQuestions={questions.length} 
        currentIndex={currentQuestionIndex} 
        mode={mode} 
      />
      
      <GameCard 
        imageUrl={currentQuestion?.photo} 
        imageAlt={`Question ${currentQuestionIndex + 1}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {currentQuestion?.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrectOption = currentQuestion.trueAnswerId === option.id;
            
            let btnVariant: 'primary' | 'secondary' | 'outline' = 'secondary';
            let extraClasses = 'w-full text-left justify-start text-lg h-auto py-4';

            if (showResult) {
              if (isCorrectOption) {
                btnVariant = 'primary';
                extraClasses += ' bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]';
              } else if (isSelected && !isCorrectOption) {
                btnVariant = 'primary';
                extraClasses += ' bg-red-600 hover:bg-red-700 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]';
              } else {
                 extraClasses += ' opacity-50';
              }
            } else if (isSelected) {
              btnVariant = 'primary';
            } else {
               extraClasses += ' hover:bg-slate-700 hover:scale-[1.02] transition-transform';
            }

            return (
              <Button
                key={option.id}
                variant={btnVariant}
                size="lg"
                onClick={() => handleAnswerClick(option.id)}
                disabled={!!selectedAnswer}
                className={extraClasses}
              >
                {option.content}
              </Button>
            );
          })}
        </div>
      </GameCard>
    </div>
  );
}

export default function GamePage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-slate-400">Loading...</div>}>
      <GameContent />
    </Suspense>
  );
}
