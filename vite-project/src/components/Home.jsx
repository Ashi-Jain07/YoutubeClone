import EachVideo from "./EachVideo";
import { useContext, useState } from 'react';
import { SearchContext } from '../utils/SearchAndSidebarContext';
import { SideBarContext } from '../utils/SearchAndSidebarContext';
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../utils/videoSlice.js";
import { useEffect } from "react";

function Home() {

  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { isSidebarOpen } = useContext(SideBarContext);
  const [showMore, setShowMore] = useState(false); // State to toggle more buttons
  
  const dispatch = useDispatch();
  const {videos, loading, error} = useSelector(state => state.video);

  useEffect(() => {
    dispatch(fetchVideos())
  });

  if(loading) {
    return <p>loading ...</p>
  }

  if(error) {
    return <p>loading ...</p>
  }

  // Filter data based on the search query
  const filteredData = videos.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //array of buttons
  const buttons = [
    { label: "React", id: 1 },
    { label: "Node.js", id: 2 },
    { label: "Javascript", id: 3 },
    { label: "CSS", id: 4 },
    { label: "Python", id: 5 },
    { label: "Travel", id: 6 },
    { label: "Photography", id: 7 },
    { label: "Blockchain", id: 8 },
    { label: "AI", id: 9 },
    { label: "Recipe", id: 10 }
  ];

  // Determine how many buttons to show based on sidebar and showMore state
  let visibleButtons = isSidebarOpen ? (showMore ? buttons.slice(7, 10) : buttons.slice(0, 6)) : (showMore ? buttons.slice(8, 10) : buttons.slice(0, 8))

  return (
    <>
    <div className={isSidebarOpen ? "flex" : undefined}>
      <div>
      {isSidebarOpen && <Sidebar />}
      </div>
      <div className="w-full">

        <div className="ml-16 h-10 mt-20 text-2xl">

          <div>
            <button className="bg-slate-200 rounded-lg px-3 py-1 mx-4 hover:border hover:border-black" onClick={() => setSearchQuery('')}>All</button>
            {visibleButtons.map((button) => (
              <button
                key={button.id}
                className="bg-slate-200 rounded-lg px-3 py-1 mx-4 hover:border hover:border-black"
                onClick={() => {setSearchQuery(button.label);
                  console.log(button.label);
                  
                }}
              >
                {button.label}
              </button>
            ))}

            <button
              className="bg-slate-200 rounded-lg px-3 py-2 mx-5 hover:border hover:border-black"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? <img src="/left-arrow.png" width="20px" height="20px" /> : <img src="/right-arrow.png" width="20px" height="20px" />}
            </button>
          </div>

        </div>

        <div className="grid grid-cols-3 mt-16 place-items-center">
          {filteredData.map((item) => (
            <EachVideo items={item} key={item.id} />
          ))}
        </div>

      </div>
      </div>
    </>
  )
}

export default Home;