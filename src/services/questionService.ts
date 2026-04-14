import { Question, DifficultyLevel, StartGameDto, EndGameDto, GameSessionResponse } from "../types";
import { api } from "./api";

export const questionService = {
  /**
   * GET /api/Questions
   * Oyun için soruları getirir.
   */
  async getQuestions(
    examSize: number = 10,
    difficultyLevel: DifficultyLevel = DifficultyLevel.Medium
  ): Promise<Question[]> {
    return api.get<Question[]>("/Questions", {
      examSize,
      difficultyLevel,
    });
  },

  /**
   * POST /api/Questions/start-game-session
   * Yeni bir oyun oturumu başlatır VE soruları döndürür.
   */
  async startGameSession(dto: StartGameDto): Promise<GameSessionResponse> {
    return api.post<GameSessionResponse>("/Questions/start-game-session", dto);
  },

  /**
   * POST /api/Questions/end-game-session
   * Oyun oturumunu bitirir ve skoru kaydeder.
   */
  async endGameSession(dto: EndGameDto): Promise<void> {
    return api.post<void>("/Questions/end-game-session", dto);
  },
};


