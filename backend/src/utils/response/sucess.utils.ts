import { Response } from 'express';
import { SuccessResponse } from './types';

export const successResponse = (
  response: Response,
  httpStatusCode: number,
  success: SuccessResponse,
): void => {
  response.status(httpStatusCode).json(success);
};
