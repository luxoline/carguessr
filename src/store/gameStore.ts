import { create } from "zustand";
import { GameMode, Question } from "../types";

export interface GameState {
  mode: GameMode | null;
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  score: number;
  isGameOver: boolean;
  isLoading: boolean;
  sessionGuid: string | null;

  setMode: (mode: GameMode) => void;
  setQuestions: (questions: Question[]) => void;
  selectAnswer: (answerId: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
  setLoading: (loading: boolean) => void;
  setSessionGuid: (guid: string | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
  mode: null,
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  score: 0,
  isGameOver: false,
  isLoading: false,
  sessionGuid: null,

  setMode: (mode) => set({ mode }),
  setQuestions: (questions) => set({ questions, currentQuestionIndex: 0, score: 0, isGameOver: false, selectedAnswer: null }),
  selectAnswer: (answerId) => set((state) => {
    if (state.selectedAnswer !== null) return state;
    const currentQ = state.questions[state.currentQuestionIndex];
    if (!currentQ) return state;

    const isCorrect = answerId === currentQ.trueAnswerId;
    return {
      selectedAnswer: answerId,
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
    sessionGuid: null,
  }),
  setLoading: (isLoading) => set({ isLoading }),
  setSessionGuid: (guid) => set({ sessionGuid: guid }),
}));

