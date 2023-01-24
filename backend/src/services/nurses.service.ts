import { Job } from '../entities/jobs.entity';
import { NurseHiredJob } from '../entities/nurse-hired-jobs.entity';
import { Nurse } from '../entities/nurses.entity';
import {
  CoWorkersByNurseDTO,
  NurseAvailableHireJobsDTO,
} from '../utils/interfaces';
import { getRepository } from '../utils/repository.utils';

/**
 * Return the nurse’s ID, nurse’s name, the nurse type, and the total number of jobs
 * that each nurse can still get hired for. Each nurse can only be hired one time
 * for each matching job and a job should only be counted towards the total if the nurse
 * has not already been hired for that job and only if the job still has remaining spots.
 * Order the results by the nurse_id in ascending order.
 */
export const getNurseAvailableHireJobs = async () => {
  const query = getRepository(Nurse)
    .createQueryBuilder('n')
    .select([
      'n.nurse_id as "nurseID"',
      'n.nurse_name as "nurseName"',
      'n.nurse_type as "nurseType"',
      'CAST(( (SELECT count(j.job_id) FROM jobs j) - COUNT(nhj.job_id) ) AS integer) as "totalJobsAvailable"',
    ])
    .leftJoin(NurseHiredJob, 'nhj', 'nhj.nurse_id = n.nurse_id')
    .groupBy('n.nurse_id');

  return query.getRawMany<NurseAvailableHireJobsDTO>();
};

/**
 * return the names of a target nurse’s co-workers. A nurse’s co-workers is defined as any
 *  nurse who is hired at any of the same facility_ids as the target nurse_id. In your
 * recording, please show the results of searching for Anne’s co-workers.
 */
export const getCoWorkersByNurse = async (nurseID: number) => {
  const query = getRepository(Nurse)
    .createQueryBuilder('n')
    .select([
      'j.facility_id as "facilityID"',
      'array_agg(cow.nurse_name) as "coworkers"',
    ])
    .innerJoin(NurseHiredJob, 'nhj', 'nhj.nurse_id = n.nurse_id')
    .innerJoin(Job, 'j', 'j.job_id = nhj.job_id')
    .innerJoin(
      (qb) =>
        qb
          .select(['n2.nurse_id', 'n2.nurse_name', 'j2.facility_id'])
          .from(Nurse, 'n2')
          .innerJoin(NurseHiredJob, 'nhj2', 'nhj2.nurse_id = n2.nurse_id')
          .innerJoin(Job, 'j2', 'j2.job_id = nhj2.job_id'),
      'cow',
      'cow.facility_id = j.facility_id AND cow.nurse_id <> n.nurse_id',
    )
    .where('n.nurse_id = :nid', { nid: nurseID })
    .groupBy('j.facility_id');

  return query.getRawMany<CoWorkersByNurseDTO>();
};
