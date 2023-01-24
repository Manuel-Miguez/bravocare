import request from 'supertest';
import HttpStatus from 'http-status-codes';
import setup from '../../../jest.setup';
import mocks from './jobs.controller.mock';
import * as service from '../../services/jobs.service';

describe('JOBS controller /v1/jobs', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  it('GET /remaining', (done) => {
    jest
      .spyOn(service, 'getRemainingSpotsForEachType')
      .mockResolvedValue(mocks.getRemainingSpotsForEachType);
    request(setup.serverInstance)
      .get('/v1/jobs/remaining')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.ACCEPTED)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
