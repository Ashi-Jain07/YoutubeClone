import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../utils/SearchAndSidebarContext';
import { SideBarContext } from '../utils/SearchAndSidebarContext';
import { Link } from 'react-router-dom';

//Apply voice search
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

function Header() {

  const [inputValue, setInputValue] = useState('')
  const [listening, setListening] = useState(false);
  const { setSearchQuery } = useContext(SearchContext);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SideBarContext);
  const token = JSON.parse(localStorage.getItem("accessToken"));
  const firstName = localStorage.getItem("firstName");

  // Start listening for speech input
  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    } else {
      alert("Speech Recognition is not supported in your browser.");
    }
  };

  // Handle speech recognition result
  if (recognition) {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setInputValue(transcript);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  }

  //Check if Date.now is greater than item.Expiry, then delete a accessToken and firstName from localStorage
  if (token) {
    if (Date.now() > token.expiry) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("firstName");
      window.location.reload();
      return
    }
  };

  //Handlle search function
  function handleSearch() {
    setSearchQuery(inputValue)
  }

  //toggle Sidebar on click of hamburger icon
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-5 items-center">

      <button onClick={toggleSidebar} className="ml-5 h-10 w-10 hidden lg+:block">
        <img src="/hamburger.png" width="50" height="40" alt="Menu" />
      </button>

      <div className='flex'>
        <img src="/youtube.png" width="50px" height="50px" />
        <p className="mt-2 text-3xl ml-2">Youtube <sup>IN</sup></p>
      </div>

      <div className="lsm:mr-16 mt-5 sm:ml-36 lsm:ml-20  lg:ml-0 lg:mt-2">
        <input type="text" value={inputValue} className="md2:w-104 sm:w-96 lsm:w-72 w-64 h-10 border border-black rounded-md p-1 text-xl" onChange={(e) => setInputValue(e.target.value)} placeholder="Search" />
        <button className="lsm:relative sm:right-11 md2:right-10 lsm:border-l lsm:border-black p-2" onClick={handleSearch}>
          <img src="/search.png" width="20" height="20" alt="Search" />
        </button>
        <button onClick={startListening} className='mr-1 relative top-1 border border-black rounded-full p-1'>
          {!listening ?
            <img src='microphone.png' width="25px" height="30px" /> :
            <img src='voice-search.png' width="25px" height="30px" />
          }
        </button>
        {!listening ? "" : <span>Speaking...</span>}
      </div>

      <div className="mr-10 mt-2">
        {/* Conditional rendering on the based of token */}
        {!token ?
          <Link to="/login">
            <button className="hidden lg+:block border border-black px-3 py-2 rounded-md text-xl bg-sky-700 text-white">
              Login
            </button>
          </Link> :
          <Link to="/myaccount">
            <button className='hidden lg+:block border border-black rounded-full p-2 px-4 text-xl bg-sky-700 text-white'>
              {firstName.charAt(0)}
            </button>
          </Link>
        }
      </div>

    </div>
  );
};

export default Header;
