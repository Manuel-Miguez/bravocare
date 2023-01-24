import {
  CoWorkersByNurseDTO,
  NurseAvailableHireJobsDTO,
} from '../../utils/interfaces';

const getNurseAvailableHireJobs: NurseAvailableHireJobsDTO[] = [
  {
    nurseID: 1003,
    nurseName: 'John',
    nurseType: 'LPN',
    totalJobsAvailable: 9,
  },
  {
    nurseID: 1004,
    nurseName: 'Thomas',
    nurseType: 'LPN',
    totalJobsAvailable: 9,
  },
  {
    nurseID: 1007,
    nurseName: 'Adam',
    nurseType: 'CNA',
    totalJobsAvailable: 10,
  },
  {
    nurseID: 1006,
    nurseName: 'Wesley',
    nurseType: 'RN',
    totalJobsAvailable: 8,
  },
  {
    nurseID: 1008,
    nurseName: 'Cory',
    nurseType: 'RN',
    totalJobsAvailable: 9,
  },
  {
    nurseID: 1005,
    nurseName: 'Sam',
    nurseType: 'CNA',
    totalJobsAvailable: 10,
  },
  {
    nurseID: 1009,
    nurseName: 'Robert',
    nurseType: 'LPN',
    totalJobsAvailable: 11,
  },
  {
    nurseID: 1010,
    nurseName: 'Mark',
    nurseType: 'RN',
    totalJobsAvailable: 10,
  },
  {
    nurseID: 1002,
    nurseName: 'Abby',
    nurseType: 'RN',
    totalJobsAvailable: 11,
  },
  {
    nurseID: 1001,
    nurseName: 'Anne',
    nurseType: 'CNA',
    totalJobsAvailable: 10,
  },
  {
    nurseID: 1000,
    nurseName: 'Kevin',
    nurseType: 'CNA',
    totalJobsAvailable: 11,
  },
];
const getCoWorkersByNurse: CoWorkersByNurseDTO[] = [
  {
    facilityID: 102,
    coworkers: ['Thomas', 'Wesley', 'Cory', 'Thomas'],
  },
] as any;

const nurseID = 1001;

export default {
  getNurseAvailableHireJobs,
  getCoWorkersByNurse,
  nurseID,
};
