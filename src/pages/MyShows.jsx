import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Show from "../components/Show";

const MyShows = () => {
  const { myShows, setCurrentPage } = useGlobalContext();

  useEffect(() => {
    setCurrentPage("myShows");
  }, []);

  if (myShows.length < 1) {
    return (
      <div className="section">
        <h2>
          No added shows <i className="fas fa-sad-tear"></i>
        </h2>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="shows-center">
        {myShows.map((item) => {
          return <Show key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default MyShows;
