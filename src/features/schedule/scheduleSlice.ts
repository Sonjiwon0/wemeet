import { Schedule } from "@/types/schedule";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScheduleState {
  current: Schedule | null;
  loading: boolean;
}

const initialState: ScheduleState = {
  current: null,
  loading: false,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedule(state, action: PayloadAction<Schedule>) {
      state.current = action.payload;
    },
    clearSchedule(state) {
      state.current = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setSchedule, clearSchedule, setLoading } = scheduleSlice.actions;
export default scheduleSlice.reducer;
