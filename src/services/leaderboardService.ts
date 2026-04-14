import { PaginatedResponse, LeaderboardEntry } from "../types";
import { api } from "./api";

export const leaderboardService = {
  /**
   * GET /api/Users/leaderboard
   * Swagger: PaginationRequestDto body ile sayfalandırılmış sıralama listesini getirir.
   * Not: Backend GET isteğinde body beklediğinden query params olarak gönderiyoruz.
   * Eğer çalışmazsa POST'a çevrilmeli.
   */
  async getLeaderboard(
    page: number = 1,
    size: number = 10
  ): Promise<PaginatedResponse<LeaderboardEntry>> {
    return api.get<PaginatedResponse<LeaderboardEntry>>("/Users/leaderboard", {
      page,
      size,
    });
  },
};

