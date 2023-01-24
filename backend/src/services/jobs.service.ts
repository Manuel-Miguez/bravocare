import { Job } from '../entities/jobs.entity';
import { NurseHiredJob } from '../entities/nurse-hired-jobs.entity';
import { Nurse } from '../entities/nurses.entity';
import { RemainingSpotsByTypeDTO } from '../utils/interfaces';
import { getRepository } from '../utils/repository.utils';

/**
 * Returns the number of remaining spots that each facility
 * has for each job type. The number of remaining spots is
 * going to be the total number of nurses needed for each nurse type,
 * minus the total number of nurses already hired for each nurse type.
 * Order your results by ascending facility_id, and ascending nurse_type
 */
const getRemainingSpotsForEachType = async () => {
  const query = getRepository(Job)
    .createQueryBuilder('j')
    .select([
      'j.facility_id as "facilityID" ',
      'j.nurse_type_needed as "nurseType"',
      'CAST(SUM(j.total_number_nurses_needed) - COUNT(n.nurse_id)  AS integer) as "remaining"',
    ])
    .leftJoin(NurseHiredJob, 'nhj', 'nhj.job_id = j.job_id')
    .leftJoin(Nurse, 'n', 'n.nurse_id = nhj.nurse_id')
    .groupBy('j.nurse_type_needed, j.facility_id')
    .orderBy('j.facility_id, j.nurse_type_needed');
  return await query.getRawMany<RemainingSpotsByTypeDTO>();
};

export { getRemainingSpotsForEachType };
