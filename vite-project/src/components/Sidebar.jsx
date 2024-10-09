import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-60 h-auto box-border shadow-sm shadow-black p-4 ">
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
        <li className="my-10 flex h-8 text-2xl font-semibold">
          You
          <img src='/right-arrow.png' width="25px" height="15px" className='mt-2 ml-4' />
        </li>
        <Link to="/history">
          <li className="my-10 text-2xl flex h-8">
            <img src='/history.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
            History
          </li>
        </Link>
        <li className="my-10 text-2xl flex h-8">
          <img src='/playlist.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
          Playlist
        </li>
        <Link to="/watchlater">
          <li className="my-10 text-2xl flex h-8">
            <img src='/clock.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
            Watch Later
          </li>
        </Link>
        <Link to="/likedvideos">
          <li className="my-10 text-2xl flex h-8">
            <img src='/heart.png' width="25px" height="20px" className='mt-1 mr-2' ></img>
            Liked Videos
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;;