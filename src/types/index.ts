// ── Game Types ──────────────────────────────────────────

export type GameMode = "solo" | "competitive";

export enum DifficultyLevel {
  Easy = 0,
  Medium = 1,
  Hard = 2,
}

export interface AnswerOption {
  id: number;
  content: string;
}

export interface Question {
  id: number;
  title: string;
  photo: string;
  trueAnswerId: number;
  carPart: number;
  options: AnswerOption[];
}

// ── Auth DTOs ───────────────────────────────────────────

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  userName: string;
  password: string;
  email: string;
  profilePhoto?: string;
}

export interface LoginResponse {
  accessToken: string;
  user?: User;
}

// ── User Types ──────────────────────────────────────────

export interface User {
  id: string | number;
  userName: string;
  username?: string; // backward compat alias
  email?: string;
  profilePhoto?: string;
  avatarUrl?: string;
  totalPoint?: number;
  gameMoney?: number;
}

// ── Leaderboard ─────────────────────────────────────────

export interface LeaderboardEntry {
  rank: number;
  userName: string;
  score: number;
  profilePhoto?: string;
}

export interface PaginationRequestDto {
  page: number;
  size: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  size: number;
}

// ── Score ────────────────────────────────────────────────

export interface Score {
  userId: string;
  score: number;
  mode: GameMode;
  date: string;
}

// ── Game Session DTOs (Swagger) ──────────────────────────

export interface StartGameDto {
  questionLimit: number;
  timeForEveryQuestion: number;
  difficultyLevel: DifficultyLevel;
}

export interface EndGameDto {
  guid: string;       // game session UUID returned from start-game-session
  totalScore: number;
}

export interface GameSessionResponse {
  sessionGuid: string;
  questions: Question[];
}
