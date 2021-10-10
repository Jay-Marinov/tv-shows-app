import React, { useEffect } from "react";

import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Show from "./Show";

const ShowsList = () => {
  const { shows, loading, setCurrentPage } = useGlobalContext();

  useEffect(() => {
    setCurrentPage("home");
  });

  if (loading) {
    return <Loading />;
  }

  if (shows.length < 1) {
    return (
      <h2 style={{ marginTop: "2rem" }}>
        No shows matched your search criteria
        <i className="fas fa-sad-tear"></i>
      </h2>
    );
  }

  return (
    <section className="section">
      <div className="shows-center">
        {shows.map((item) => {
          return <Show key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ShowsList;
