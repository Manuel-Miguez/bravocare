import { Request, Response } from 'express';
import { successResponse } from '../utils/response/sucess.utils';
import HttpStatus from 'http-status-codes';
import { ApiError } from '../utils/response/error.utils';
import { Descriptions } from '../config/descriptions';
import * as service from '../services/nurses.service';
export const getAvailableHireJobs = async (
  _request: Request,
  response: Response,
) => {
  try {
    const result = await service.getNurseAvailableHireJobs();
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

export const getCoworkersByNurse = async (
  request: Request,
  response: Response,
) => {
  try {
    const nurse = Number(request.params.nurse);
    const result = await service.getCoWorkersByNurse(nurse);
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
