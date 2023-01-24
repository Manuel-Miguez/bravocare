import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CardContainerReducer from '../components/card-container/features/CardContainer.slice';

export const store = configureStore({
  reducer: {
    card: CardContainerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
