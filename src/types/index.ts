export type GameMode = "solo" | "competitive";

export interface Question {
  id: string;
  imageUrl: string;
  options: string[];
  correctAnswer: string;
}

export interface User {
  id: string;
  username: string;
  avatarUrl?: string;
  stats: {
    totalGames: number;
    accuracy: number;
    bestScore: number;
  };
}

export interface Score {
  userId: string;
  score: number;
  mode: GameMode;
  date: string;
}
