import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../utils/SearchAndSidebarContext';
import { SideBarContext } from '../utils/SearchAndSidebarContext';
import { Link } from 'react-router-dom';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

function Header() {

  const [inputValue, setInputValue] = useState('')
  const [listening, setListening] = useState(false);
  const { setSearchQuery } = useContext(SearchContext);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SideBarContext);

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

  //Handlle search function
  function handleSearch() {
    setSearchQuery(inputValue)
  }

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex justify-between mt-5 items-center">

      <button onClick={toggleSidebar} className="ml-5 h-10 w-10">
        <img src="/hamburger.png" width="50" height="40" alt="Menu" />
      </button>

      <div className='flex'>
        <img src="/youtube.png" width="50px" height="50px" />
        <p className="mt-2 text-3xl ml-2">Youtube <sup>IN</sup></p>
      </div>

      <div className="mr-16 mt-2">
        <input type="text" value={inputValue} className="w-104 h-10 border border-black rounded-md p-1 text-xl" onChange={(e) => setInputValue(e.target.value)} placeholder="Search" />
        <button className="relative right-10 border-l border-black p-2" onClick={handleSearch}>
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
        <Link to="/login">
        <button className="border border-black px-3 py-2 rounded-md text-xl bg-sky-700 text-white">
          Login
        </button>
        </Link>
      </div>

    </div>
  );
};

export default Header;
