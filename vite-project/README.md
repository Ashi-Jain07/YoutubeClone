GitHub Link :- https://github.com/Ashi-Jain07/YoutubeClone.git

# YouTube Clone - MERN Stack

This project is a YouTube clone built using the MERN stack (MongoDB, Express, React, and Node.js). It provides functionalities such as user registration, login, video uploading, viewing, liking, disliking, commenting, and channel creation.

## Features

- **User Registration and Login**
  - Users can create an account and log in.
  - JWT authentication is used for securing routes.
  
- **Channels**
  - Users can create their own channels.
  - Each channel can host multiple videos.
  
- **Video Upload**
  - Users can upload videos to their channels with a title, description, URL, and category.
  
- **Video Viewing**
  - Users can view videos from channels and leave comments.
  - Users can like or dislike videos.
  
- **Comments**
  - Users can comment on videos, and comments are displayed below each video.
  - Users can edit and delete a comment.
  
- **Like/Dislike Functionality**
  - Videos can be liked or disliked by users.

- **Search Functionality**
  - User can search video based on title and category

## Tech Stack

- **Frontend**: React.js, React Router, Axios, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Version Control**: Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ashi-Jain07/YoutubeClone.git

2. Install dependencies for both the frontend and backend

3. Set up environment variables

4. Start the development servers

5. Access the application:
  - The frontend should be running on http://localhost:3000
  - The backend API will be running on http://localhost:5500

# API Endpoints

 **Home**
    GET/video - Fetch all videos

 **Authentication**
    POST /register - User registration
    POST /login - User login

 **Channels**
    GET /channels - Get all channels
    POST /addchannel - Create a new channel
    DELETE/deletechannel - Delete a channel

 **Videos**
    PATCH /addVideo/:id - Upload a video to a channel
    PATCH /editVideo/:id - Edit video details
    DELETE /deleteVideo/:id - Delete a video

 **Comments**
    PATCH /video/:videoId - Add a comment to a video
    PATCH/editcomment/:videoId - Edit a comment
    DELETE/deletecomment/:videoId - Delete a comment

 **Like/Dislike**
    PATCH /video/:videoId - Like a video
    PATCH /video/:videoId - Dislike a video