import { Question, Score, DifficultyLevel } from "../types";
import { api } from "./api";

export const questionService = {
  async getQuestions(examSize: number = 10, difficultyLevel: DifficultyLevel = DifficultyLevel.Medium): Promise<Question[]> {
    return api.get<Question[]>("/Questions", { 
        examSize, 
        difficultyLevel 
    });
  },

  async submitScore(score: Pick<Score, "userId" | "score" | "mode">): Promise<{ success: boolean; newRank?: number }> {
    // Note: Swagger didn't list a score submission endpoint. 
    // Mocking this part until a backend endpoint is available.
    return new Promise((resolve) => {
        console.log("Score submitted (mocked):", score);
        resolve({
          success: true,
          newRank: score.mode === "competitive" ? Math.floor(Math.random() * 100) + 1 : undefined
        });
    });
  }
};
