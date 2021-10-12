import { useState, useEffect, useContext, createContext } from "react";
import { camps } from "../pages/api/camps";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [campList, setCampList] = useState(camps);
  const [emptyCampList, setEmptyCampList] = useState(false);
  const [addCamp, setAddCamp] = useState(false);
  const [addComment, setAddComment] = useState(false);

  // useEffect(() => {
  //   const campListData = JSON.parse(localStorage.getItem("campList"));
  //   if (campListData) {
  //     setCampList(campListData);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("campList", JSON.stringify(campList));
  // }, [campList]);

  return (
    <AppContext.Provider
      value={{
        campList,
        setCampList,
        emptyCampList,
        setEmptyCampList,
        addCamp,
        setAddCamp,
        addComment,
        setAddComment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
