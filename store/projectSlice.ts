import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: [
    { id: 1, title: 'Project Title', description: 'Project description goes here.' },
  ],
  reducers: {},
});

export default projectsSlice.reducer;