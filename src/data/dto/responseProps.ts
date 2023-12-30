export interface LoginResponse {
  token: string;
  user: {
    name: string;
    role: string;
    validated: boolean;
  };
}
