import { Request, Response } from 'express';
import * as service from '../services/question-shifts.service';
import { successResponse } from '../utils/response/sucess.utils';
import HttpStatus from 'http-status-codes';
import { ApiError } from '../utils/response/error.utils';
import { Descriptions } from '../config/descriptions';
export const getQuestionShifts = async (
  _request: Request,
  response: Response,
) => {
  try {
    const list = await service.listQuestionShifts();
    successResponse(response, HttpStatus.ACCEPTED, {
      ok: true,
      data: list,
    });
  } catch (error) {
    const customError = new ApiError(
      HttpStatus.BAD_GATEWAY,
      'General',
      Descriptions.questionShifts.getQuestionShifts.error.notFound,
    );
    response.status(503).json(customError.JSON);
  }
};

export const compareShifts = async (request: Request, response: Response) => {
  try {
    const first = Number(request.query.first);
    const second = Number(request.query.second);
    const shifts = await service.listQuestionShiftsByID([first, second]);
    const result = service.compareQuestionShifts(shifts[0], shifts[1]);
    successResponse(response, HttpStatus.ACCEPTED, {
      ok: true,
      data: result,
    });
  } catch (error) {
    const customError = new ApiError(
      HttpStatus.BAD_GATEWAY,
      'General',
      Descriptions.questionShifts.getQuestionShifts.error.notFound,
    );
    response.status(503).json(customError.JSON);
  }
};
