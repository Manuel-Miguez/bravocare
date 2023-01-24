import request from 'supertest';
import HttpStatus from 'http-status-codes';
import setup from '../../../jest.setup';
import * as service from '../../services/question-shifts.service';
import mocks from './question-shifts.controller.mock';

describe('question ONE controller /v1/question-shifts', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  it('GET /available-to-hire', (done) => {
    jest
      .spyOn(service, 'listQuestionShifts')
      .mockResolvedValue(mocks.listQuestionShifts);

    request(setup.serverInstance)
      .get('/v1/question-shifts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.ACCEPTED)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('GET /question-shifts/compare', (done) => {
    jest
      .spyOn(service, 'listQuestionShiftsByID')
      .mockResolvedValue(mocks.listQuestionShiftsByID);

    request(setup.serverInstance)
      .get('/v1/question-shifts/compare')
      .query({
        first: mocks.listQuestionShiftsByIDParams[0],
        second: mocks.listQuestionShiftsByIDParams[1],
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.ACCEPTED)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
