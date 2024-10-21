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
  const [showMore, setShowMore] = useState(false);
  const [searchCategory, setSearchCategory] = useState("")
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector(state => state.video);

  useEffect(() => {
    dispatch(fetchVideos())
  }, [dispatch]);

  if (loading) {
    return <p>loading ...</p>
  }

  if (error) {
    return <p>loading ...</p>
  }

  // Filter data based on the search title and search category
  const filteredData = videos.filter(item => {
    const matchesCategory = searchCategory ? item.category.toLowerCase() === searchCategory.toLowerCase() : true;
    const matchesTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTitle;
  });

  //array of buttons
  const buttons = [
    { label: "Education", id: 1 },
    { label: "Technology", id: 2 },
    { label: "Health & Fitness", id: 3 },
    { label: "Travel", id: 4 },
    { label: "Cooking", id: 5 },
    { label: "DIY", id: 6 },
    { label: "Music", id: 7 },
    { label: "Art", id: 8 },
    { label: "Web Development", id: 9 }
  ];

  // Determine how many buttons to show based on sidebar and showMore state
  let visibleButtons = isSidebarOpen ? (showMore ? buttons.slice(7, 9) : buttons.slice(0, 6)) : (showMore ? buttons.slice(8, 9) : buttons.slice(0, 8))

  return (
    <>
      <div className={isSidebarOpen ? "flex" : undefined}>
        <div>
          {isSidebarOpen && <Sidebar />}
        </div>
        <div className="w-full">

          <div className="ml-16 h-10 lg:mt-20 text-2xl">

            <div className="hidden lg:block">
              <button className="bg-slate-200 rounded-lg px-3 py-1 mx-4 hover:border hover:border-black" onClick={() => { setSearchQuery(''); setSearchCategory('') }}>All</button>
              {/* map on the buttons array */}
              {visibleButtons.map((button) => (
                <button
                  key={button.id}
                  className={isSidebarOpen ? "bg-slate-200 rounded-lg px-3 py-1 mx-2.5 hover:border hover:border-black" : "bg-slate-200 rounded-lg px-3 py-1 mx-3 hover:border hover:border-black"}
                  onClick={() => {
                    setSearchQuery("")
                    setSearchCategory(button.label)
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-16 mb-2 m-1 lg:ml-5 place-items-center">
            {filteredData.map((item) => (
              <EachVideo items={item} key={item._id} />
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;