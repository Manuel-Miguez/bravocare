export interface ApiResponse<T> {
  ok: boolean;
  data: T;
}

export interface ApiErrorResponse {
  errorType: string;
  errorMessage: string;
  errors: string;
  errorRaw: string;
  errorsValidation: string;
  stack: string;
}
