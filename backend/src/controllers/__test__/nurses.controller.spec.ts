import request from 'supertest';
import HttpStatus from 'http-status-codes';
import setup from '../../../jest.setup';
import * as service from '../../services/nurses.service';
import mocks from './nurses.controller.mock';

describe('NURSES controller /v1/nurses', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  it('GET /available-to-hire', (done) => {
    jest
      .spyOn(service, 'getNurseAvailableHireJobs')
      .mockResolvedValue(mocks.getNurseAvailableHireJobs);
    request(setup.serverInstance)
      .get('/v1/nurses/available-to-hire')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.ACCEPTED)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('GET /:nurse/coworkers', (done) => {
    jest
      .spyOn(service, 'getCoWorkersByNurse')
      .mockResolvedValue(mocks.getCoWorkersByNurse);
    request(setup.serverInstance)
      .get(`/v1/nurses/${mocks.nurseID}/coworkers`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.ACCEPTED)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
