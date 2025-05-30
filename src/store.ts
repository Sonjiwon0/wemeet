import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './features/schedule/slice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
