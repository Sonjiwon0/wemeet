import { Schedule, UserRespond } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScheduleState {
  schedules: Schedule[];
  responds: Record<string, UserRespond[]>;
  loading: boolean;
}

const initialState: ScheduleState = {
  schedules: [],
  responds: {},
  loading: false,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addSchedule(state, action: PayloadAction<Schedule>) {
      // 새로운 일정을 state에 추가
      state.schedules.push(action.payload);
    },
    updateRespond(
      // 특정 scheduleId에 대한 사용자의 응답 업데이트
      state,
      action: PayloadAction<{ scheduleId: string; respond: UserRespond }>
    ) {
      const { scheduleId, respond } = action.payload;
      if (!state.responds[scheduleId]) {
        state.responds[scheduleId] = [];
      }
      // 기존 userId 가 있으면 덮어씀
      state.responds[scheduleId] = state.responds[scheduleId].filter(
        (r) => r.userId !== respond.userId
      );
      state.responds[scheduleId].push(respond);
    },
    clearSchedule() {
      // 모든 일정, 응답 초기화
      return initialState;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { addSchedule, updateRespond, clearSchedule, setLoading } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
