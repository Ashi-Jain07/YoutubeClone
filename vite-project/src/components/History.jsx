import { SideBarContext } from "../utils/SearchAndSidebarContext";
import { useContext } from "react";
import Sidebar from "./Sidebar";

function History() {

  const {isSidebarOpen} = useContext(SideBarContext);

    return(
        <>
        <div className={isSidebarOpen ? "flex" : undefined}>
          <div>
            {isSidebarOpen && <Sidebar />}
          </div>
          <div>
          <h1>History</h1>
          </div>
          </div>
        </>
    )
}

export default History;