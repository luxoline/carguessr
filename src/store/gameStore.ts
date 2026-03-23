import { create } from "zustand";
import { GameMode, Question } from "../types";

export interface GameState {
  mode: GameMode | null;
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  score: number;
  isGameOver: boolean;
  isLoading: boolean;
  
  setMode: (mode: GameMode) => void;
  setQuestions: (questions: Question[]) => void;
  selectAnswer: (answer: string) => void;
  nextQuestion: () => void;
  resetGame: () => void;
  setLoading: (loading: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
  mode: null,
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  score: 0,
  isGameOver: false,
  isLoading: false,

  setMode: (mode) => set({ mode }),
  setQuestions: (questions) => set({ questions, currentQuestionIndex: 0, score: 0, isGameOver: false, selectedAnswer: null }),
  selectAnswer: (answer) => set((state) => {
    if (state.selectedAnswer !== null) return state; // Prevent re-answering
    const currentQ = state.questions[state.currentQuestionIndex];
    if (!currentQ) return state;
    
    const isCorrect = answer === currentQ.correctAnswer;
    return {
      selectedAnswer: answer,
      score: isCorrect ? state.score + 100 : state.score
    };
  }),
  nextQuestion: () => set((state) => {
    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex >= state.questions.length) {
      return { isGameOver: true };
    }
    return {
      currentQuestionIndex: nextIndex,
      selectedAnswer: null
    };
  }),
  resetGame: () => set({
    mode: null,
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswer: null,
    score: 0,
    isGameOver: false,
  }),
  setLoading: (isLoading) => set({ isLoading })
}));
