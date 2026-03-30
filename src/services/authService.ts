import { User, LoginDto, RegisterDto, LoginResponse } from "../types";
import { api, tokenManager } from "./api";

export const authService = {
  async login(data: LoginDto): Promise<User> {
    const response = await api.post<LoginResponse>("/Users/login", data);
    
    // Server should return the token as accessToken
    if (response.accessToken) {
      tokenManager.setToken(response.accessToken);
    }

    // Attempt to fetch current user details if not fully populated in login response
    if (response.user) {
        return response.user;
    }
    
    return this.getCurrentUser();
  },
  
  async register(data: RegisterDto): Promise<void> {
    await api.post<void>("/Users", data);
  },

  async getCurrentUser(): Promise<User> {
      return api.get<User>("/Users/current-user");
  },

  logout(): void {
      tokenManager.removeToken();
  }
};
