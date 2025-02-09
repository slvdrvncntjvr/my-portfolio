import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Your Name',
    bio: 'A brief introduction about you.',
  },
  reducers: {},
});

export default profileSlice.reducer;