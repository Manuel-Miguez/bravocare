import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { QuestionShift } from '../../../types/Question-shift.interface';

const initialState: { value: QuestionShift[] } = { value: [] };

export const cardContainerSlice = createSlice({
  name: 'selected-shifts',
  initialState,
  reducers: {
    addQuestionShifts: (state, newState: PayloadAction<QuestionShift[]>) => {
      state.value = newState.payload;
    },
  },
});

export const selectQuestionShifts = (state: RootState) => {
  return state.card.value;
};

export const { addQuestionShifts } = cardContainerSlice.actions;

export default cardContainerSlice.reducer;
