import { PaginatedResponse, LeaderboardEntry } from "../types";
import { api } from "./api";

export const leaderboardService = {
  async getLeaderboard(page: number = 0, size: number = 10): Promise<PaginatedResponse<LeaderboardEntry>> {
    return api.post<PaginatedResponse<LeaderboardEntry>>("/Users/leaderboard", {
        page,
        size
    });
  }
};
