const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:7264/api";

// Token management
export const tokenManager = {
  getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("auth_token");
  },
  setToken(token: string): void {
    localStorage.setItem("auth_token", token);
  },
  removeToken(): void {
    localStorage.removeItem("auth_token");
  },
};

// Generic fetch wrapper with auth support
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = tokenManager.getToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new ApiError(response.status, errorBody || response.statusText);
  }

  // Handle empty responses (204 No Content, etc.)
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return {} as T;
  }

  return response.json();
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

// HTTP method helpers
export const api = {
  get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
    let url = endpoint;
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, String(value));
      });
      url += `?${searchParams.toString()}`;
    }
    return request<T>(url, { method: "GET" });
  },

  post<T>(endpoint: string, body?: unknown): Promise<T> {
    return request<T>(endpoint, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  put<T>(endpoint: string, body?: unknown): Promise<T> {
    return request<T>(endpoint, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  delete<T>(endpoint: string): Promise<T> {
    return request<T>(endpoint, { method: "DELETE" });
  },
};
