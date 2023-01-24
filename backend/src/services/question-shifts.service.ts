import { In } from 'typeorm';
import { Descriptions } from '../config/descriptions';
import { Facility } from '../entities/facilities.entity';
import { QuestionOneShift } from '../entities/question-one-shifts.entity';
import { dateRangeOverlaps, formatDate, formatHour } from '../utils/date.utils';
import {
  CompareShiftsResponseDTO,
  QuestionShiftsListDTO,
} from '../utils/interfaces';
import { getRepository } from '../utils/repository.utils';

/**
 * Get List of Questions Shifts
 */
export const listQuestionShifts = async () => {
  const query = getRepository(QuestionOneShift)
    .createQueryBuilder('qs')
    .select([
      'qs.shift_id as "shiftID"',
      'qs.facility_id as "facilityID"',
      'qs.shift_date as "shiftDate"',
      'qs.start_time as "startTime"',
      'qs.end_time as "endTime"',
      'f.facility_name as "facilityName"',
    ])
    .innerJoin(Facility, 'f', 'f.facility_id = qs.facility_id');
  const list = await query.getRawMany<QuestionShiftsListDTO>();
  return list.map<QuestionShiftsListDTO>((shift) => {
    return {
      ...shift,
      endTime: formatHour(shift.shiftDate, shift.endTime),
      startTime: formatHour(shift.shiftDate, shift.startTime),
    };
  });
};

/**
 * Get List of Questions Shifts by its ID
 */
export const listQuestionShiftsByID = async (shiftsID: number[]) => {
  const shifts = await getRepository(QuestionOneShift).find({
    where: { shiftID: In(shiftsID) },
  });
  if (shifts.length != shiftsID.length)
    throw new Error(Descriptions.questionShifts.error.notFound);

  return shifts;
};

/**
 * Compare 2 Shifts to know whether they overlap and exceed the Threshold
 */
export const compareQuestionShifts = (
  firstShift: QuestionOneShift,
  secondShift: QuestionOneShift,
): CompareShiftsResponseDTO => {
  const firstShiftDateRange = {
    start: new Date(
      `${formatDate(firstShift.shiftDate)} ${firstShift.startTime}`,
    ).getTime(),
    end: new Date(
      `${formatDate(firstShift.shiftDate)} ${firstShift.endTime}`,
    ).getTime(),
  };
  const secondShiftDateRange = {
    start: new Date(
      `${formatDate(secondShift.shiftDate)} ${secondShift.startTime}`,
    ).getTime(),
    end: new Date(
      `${formatDate(secondShift.shiftDate)} ${secondShift.endTime}`,
    ).getTime(),
  };
  const minutesOfOverlap = dateRangeOverlaps(
    firstShiftDateRange,
    secondShiftDateRange,
  );

  const isSameFacilityID = firstShift.facilityID === secondShift.facilityID;
  if (!isSameFacilityID && minutesOfOverlap) {
    return {
      exceeded: true,
      overlapThreshold: 0,
      totalOverlapMinutes: minutesOfOverlap,
    };
  }

  if (isSameFacilityID && minutesOfOverlap > 30) {
    return {
      exceeded: true,
      overlapThreshold: 30,
      totalOverlapMinutes: minutesOfOverlap,
    };
  }

  return {
    exceeded: false,
    overlapThreshold: 0,
    totalOverlapMinutes: minutesOfOverlap,
  };
};
