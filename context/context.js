import { useState, useContext, createContext } from "react";
import { camps } from "../public/camps";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [campList, setCampList] = useState(camps);
  const [emptyCampList, setEmptyCampList] = useState(false);
  const [addCamp, setAddCamp] = useState(false);

  return (
    <AppContext.Provider
      value={{
        campList,
        setCampList,
        emptyCampList,
        setEmptyCampList,
        addCamp,
        setAddCamp,
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
