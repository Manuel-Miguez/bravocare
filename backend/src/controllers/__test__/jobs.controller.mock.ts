import { RemainingSpotsByTypeDTO } from '../../utils/interfaces';

const getRemainingSpotsForEachType: RemainingSpotsByTypeDTO[] = [
  {
    facilityID: 100,
    nurseType: 'CNA',
    remaining: 1,
  },
  {
    facilityID: 100,
    nurseType: 'RN',
    remaining: 2,
  },
  {
    facilityID: 101,
    nurseType: 'CNA',
    remaining: 0,
  },
  {
    facilityID: 101,
    nurseType: 'LPN',
    remaining: 2,
  },
  {
    facilityID: 102,
    nurseType: 'CNA',
    remaining: 3,
  },
  {
    facilityID: 102,
    nurseType: 'LPN',
    remaining: 3,
  },
  {
    facilityID: 102,
    nurseType: 'RN',
    remaining: 2,
  },
];

export default {
  getRemainingSpotsForEachType,
};
