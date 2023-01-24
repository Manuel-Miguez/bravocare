import { Request, Response } from 'express';
import { successResponse } from '../utils/response/sucess.utils';
import HttpStatus from 'http-status-codes';
import { ApiError } from '../utils/response/error.utils';
import { Descriptions } from '../config/descriptions';
import * as service from '../services/jobs.service';
export const getRemainingJobs = async (
  _request: Request,
  response: Response,
) => {
  try {
    const result = await service.getRemainingSpotsForEachType();
    successResponse(response, HttpStatus.ACCEPTED, {
      ok: true,
      data: result,
    });
  } catch (error) {
    const customError = new ApiError(
      HttpStatus.BAD_GATEWAY,
      'General',
      Descriptions.general.error.executingQuery,
    );
    response.status(503).json(customError.JSON);
  }
};
