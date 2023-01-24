import { Facility } from '../../entities/facilities.entity';
import { Job } from '../../entities/jobs.entity';
import { NurseHiredJob } from '../../entities/nurse-hired-jobs.entity';
import { Nurse } from '../../entities/nurses.entity';
import { QuestionOneShift } from '../../entities/question-one-shifts.entity';

export const entities = [Job, QuestionOneShift, Nurse, NurseHiredJob, Facility];
