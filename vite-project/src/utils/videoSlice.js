import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks for async API calls
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
    const response = await axios.get('http://localhost:5500/video');
    return response.data;
  });
  
  export const addVideo = createAsyncThunk('videos/addVideo', async (newVideo) => {
    const response = await axios.post('http://localhost:5500/video', newVideo);
    return response.data;
  });
  
//   export const removeVideo = createAsyncThunk('videos/removeVideo', async (id) => {
//     await axios.delete(`https://api.example.com/videos/${id}`);
//     return id;
//   });

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: [],
        loading: false,
        error: ""
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder 
        //Fetch Video
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

        //Add Video
        .addCase(addVideo.fulfilled, (state, action) => {
            state.videos.push(action.payload);
        })
    }
}) 

export default videoSlice.reducer;