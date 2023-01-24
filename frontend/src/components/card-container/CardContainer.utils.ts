import { CardProps } from '../card/Card.interfaces';

export const modifySelectState = (shifts: CardProps[], selectedShifts: number[]): CardProps[] => {
  let countChanges: number = 0;

  shifts.forEach((shift) => {
    if (selectedShifts.includes(shift.shiftID)) countChanges++;
    shift.isCardSelected = selectedShifts.includes(shift.shiftID);
    return countChanges !== selectedShifts.length;
  });

  return [...shifts];
};

export const modifySelectedShifts = (selected: number[], shiftID: number): number[] => {
  if (selected.includes(shiftID)) return selected.filter((s) => s !== shiftID);
  if (selected.length > 1) selected.shift();
  selected.push(shiftID);
  return selected;
};

export const getSelectedShifts = (shifts: CardProps[]): CardProps[] => {
  return shifts.filter((shift) => shift.isCardSelected);
};
