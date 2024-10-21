import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks for async API calls
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await axios.get('http://localhost:5500/video');
  return response.data;
});

// Create the video slice
const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    loading: false,
    error: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Videos
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export default videoSlice.reducer;
