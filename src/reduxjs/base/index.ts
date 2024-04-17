/* eslint @typescript-eslint/no-unused-vars: 0 */
import { createSlice } from '@reduxjs/toolkit';

interface BaseSliceInterface {
  loadingState: boolean;
  errors: { error: string; id: number }[];
}

const baseSlice = createSlice({
  name: 'baseSlice',
  initialState: {
    loadingState: false,
    errors: [],
  } as BaseSliceInterface,
  reducers: {},
});

export const baseActions = baseSlice.actions;
export const {} = baseSlice.actions;
export default baseSlice.reducer;
