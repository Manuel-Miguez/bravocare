import { QuestionOneShift } from '../../entities/question-one-shifts.entity';
import { QuestionShiftsListDTO } from '../../utils/interfaces';

const listQuestionShifts: QuestionShiftsListDTO[] = [
  {
    shiftID: 1,
    facilityID: 100,
    shiftDate: '2022-10-01T04:00:00.000Z',
    startTime: '07:00:00',
    endTime: '15:30:00',
    facilityName: 'Facility A',
  },
  {
    shiftID: 2,
    facilityID: 100,
    shiftDate: '2022-10-01T04:00:00.000Z',
    startTime: '15:00:00',
    endTime: '23:00:00',
    facilityName: 'Facility A',
  },
  {
    shiftID: 3,
    facilityID: 100,
    shiftDate: '2022-10-03T04:00:00.000Z',
    startTime: '15:00:00',
    endTime: '23:00:00',
    facilityName: 'Facility A',
  },
  {
    shiftID: 4,
    facilityID: 100,
    shiftDate: '2022-10-03T04:00:00.000Z',
    startTime: '07:00:00',
    endTime: '19:00:00',
    facilityName: 'Facility A',
  },
  {
    shiftID: 5,
    facilityID: 101,
    shiftDate: '2022-10-02T04:00:00.000Z',
    startTime: '07:30:00',
    endTime: '23:00:00',
    facilityName: 'Facility B',
  },
  {
    shiftID: 6,
    facilityID: 102,
    shiftDate: '2022-10-03T04:00:00.000Z',
    startTime: '15:00:00',
    endTime: '23:30:00',
    facilityName: 'Facility C',
  },
] as any;

const listQuestionShiftsByID: QuestionOneShift[] = [
  {
    shiftID: 3,
    facilityID: 100,
    shiftDate: '2022-10-03',
    startTime: '15:00:00',
    endTime: '23:00:00',
  },
  {
    shiftID: 4,
    facilityID: 100,
    shiftDate: '2022-10-03',
    startTime: '07:00:00',
    endTime: '19:00:00',
  },
] as any;

const listQuestionShiftsByIDParams = [3, 4];

export default {
  listQuestionShifts,
  listQuestionShiftsByID,
  listQuestionShiftsByIDParams,
};
