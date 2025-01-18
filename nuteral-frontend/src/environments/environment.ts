export interface Environment {
  production: boolean;
  apiUrl: string;
  bypassAdmin: boolean;
}

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:8000',  // Development API URL
  bypassAdmin: false,  // Enable admin bypass in development
};
