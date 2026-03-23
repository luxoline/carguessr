import { GameMode, Question, Score } from "../types";
import { MOCK_QUESTIONS } from "./mockData";

const DELAY = 800; // Simulated latency

export const questionService = {
  async getQuestions(mode: GameMode, limit: number = 4): Promise<Question[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, mode might dictate complexity or different DB tables
        // Here we just shuffle the mock questions and return up to `limit`
        const shuffled = [...MOCK_QUESTIONS].sort(() => 0.5 - Math.random());
        resolve(shuffled.slice(0, limit));
      }, DELAY);
    });
  },

  async submitScore(score: Pick<Score, "userId" | "score" | "mode">): Promise<{ success: boolean; newRank?: number }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mocking saving score
        console.log("Score submitted:", score);
        resolve({
          success: true,
          newRank: score.mode === "competitive" ? Math.floor(Math.random() * 100) + 1 : undefined
        });
      }, DELAY);
    });
  }
};
