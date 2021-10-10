import React, { useState, useContext, useEffect } from "react";

const getLocalStorage = () => {
  let storeMyShows = localStorage.getItem("storeMyShows");
  if (storeMyShows) {
    return JSON.parse(localStorage.getItem("storeMyShows"));
  } else {
    return [];
  }
};

const AppContext = React.createContext();
const url = "https://api.tvmaze.com/search/shows?q=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [myShows, setMyShows] = useState(getLocalStorage());
  const [searchTerm, setSearchTerm] = useState("a");
  const [currentPage, setCurrentPage] = useState("home");

  const fetchShows = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      if (data) {
        let newShows = data.map((item) => {
          const {
            show: { id, name, image },
          } = item;

          return { id, name, image };
        });

        newShows = newShows.filter((show) => {
          return show.id && show.name && show.image;
        });

        setShows(newShows);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("storeMyShows", JSON.stringify(myShows));
  }, [myShows]);

  return (
    <AppContext.Provider
      value={{
        shows,
        loading,
        setSearchTerm,
        myShows,
        setMyShows,
        currentPage,
        setCurrentPage,
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
