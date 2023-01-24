import { Nurse } from '../entities/nurses.entity';
import { QuestionOneShift } from '../entities/question-one-shifts.entity';

export interface CompareShiftsResponseDTO {
  totalOverlapMinutes: number;
  overlapThreshold: number;
  exceeded: boolean;
}

export interface RemainingSpotsByTypeDTO {
  facilityID: number;
  nurseType: string;
  remaining: number;
}

export interface NurseAvailableHireJobsDTO extends Nurse {
  totalJobsAvailable: number;
}

export interface CoWorkersByNurseDTO {
  facilityID: number;
  coworkers: string[];
}

export interface QuestionShiftsListDTO extends QuestionOneShift {
  endTime: Date | string;
  startTime: Date | string;
  facilityName: string;
}
