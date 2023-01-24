import { AxiosError } from 'axios';
import { ApiErrorResponse } from '../types/Api-response.interface';

export const axiosErrorHandler = (err: AxiosError<ApiErrorResponse>) => {
  if (err.response) throw new Error(String(err.response.data.errorMessage));
  if (err.message) throw new Error(String(err.message));
  throw new Error('There Was an error Requesting the data');
};
