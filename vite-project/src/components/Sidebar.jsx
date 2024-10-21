import React from 'react';
import { Link } from 'react-router-dom';

//creating sidebar component
function Sidebar() {
  return (
    <div className="hidden lg+:block w-52 h-auto box-border shadow-sm shadow-black p-4 ">
      <ul>
        <Link to="/">
          <li className="my-10 text-2xl flex h-8">
            <img src='/home.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
            Home
          </li>
        </Link>
        <li className="my-10 text-2xl flex h-8">
          <img src='/video.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
          Shorts
        </li>
        <li className="my-10 text-2xl flex h-8">
          <img src='/subscribe.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
          Subscriptions
        </li>
        <Link to="/myaccount" >
          <li className="my-10 flex h-8 text-2xl font-semibold">
            You
            <img src='/right-arrow.png' width="25px" height="15px" className='mt-2 ml-4' />
          </li>
        </Link>
        <li className="my-10 text-2xl flex h-8">
          <img src='/history.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
          History
        </li>
        <li className="my-10 text-2xl flex h-8">
          <img src='/playlist.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
          Playlist
        </li>
        <li className="my-10 text-2xl flex h-8">
          <img src='/clock.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
          Watch Later
        </li>
        <li className="my-10 text-2xl flex h-8">
          <img src='/heart.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
          Liked Videos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;;