import { useState, useEffect, useReducer } from "react";
import { useRoutes } from "react-router-dom";
import { AdminPanelContext } from "./context/AdminPanelContext";
import { initialState,reducer } from "./reducer/reducer"
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar/Sidebar";
import supabase from "./config/supabaseClient";


function App() {
  // all routes
  const routers = useRoutes(routes);

  // states
  const [state, dispatch] = useReducer(reducer, initialState);
  const [allData, setAllData] = useState([]);

  const {
    isShowQuickAccessModal,
    isShowMessageModal,
    isShowNotificationsModal,
    isShowSidebar,
    isShowMenuModals,
    isShowAdminDetailModal,
    loadingTime,
  } = state;


  const closeAllModal = () => {
    dispatch({ type: "CLOSE_ALL_MODAL" });
  };

  const setModalStatus = (modalName, status) => {
    dispatch({ type: "SET_MODAL_STATUS", payload: { modalName, status } });
  };

 
  useEffect(() => {

    const getRequest = async () => {
      const { data, error } = await supabase.from("allPanelData").select();
  
      if (data) {

        setAllData([...data]);
        dispatch({ type: "FINISH_LOADING_TIME" });

      } else {
        console.log("error => ", error);
      }
    };
    
    getRequest();
  }, []);

  return (
    <AdminPanelContext.Provider
      value={{
        isShowQuickAccessModal,
        isShowMessageModal,
        isShowNotificationsModal,
        isShowSidebar,
        isShowMenuModals,
        isShowAdminDetailModal,
        setModalStatus,
        loadingTime,
        closeAllModal,
        dispatch,
        state,
        setAllData,
        allData,
      }}
    >
      <div
        onClick={closeAllModal}
        className="font-iranYekanMedium bg-[#E7EBEE]"
      >
        <div className={isShowSidebar ? "overlay" : ""}></div>
        <div className="container">
          <div className="flex items-center">
            <Sidebar />
            <main className="lg:pr-80 2xl:pr-72 w-full">{routers}</main>
          </div>
        </div>
      </div>
    </AdminPanelContext.Provider>
  );
}

export default App;
