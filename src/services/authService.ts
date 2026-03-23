import { User } from "../types";
import { MOCK_USERS } from "./mockData";

const DELAY = 600;

export const authService = {
  async login(username: string): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = Object.values(MOCK_USERS).find(u => u.username.toLowerCase() === username.toLowerCase());
        if (user) {
          resolve(user);
        } else {
          resolve({
            id: `u${Date.now()}`,
            username,
            stats: { totalGames: 0, accuracy: 0, bestScore: 0 }
          });
        }
      }, DELAY);
    });
  },
  
  async register(username: string): Promise<User> {
    return new Promise((resolve) => {
       setTimeout(() => {
          resolve({
            id: `u${Date.now()}`,
            username,
            stats: { totalGames: 0, accuracy: 0, bestScore: 0 }
          });
       }, DELAY);
    });
  }
};
