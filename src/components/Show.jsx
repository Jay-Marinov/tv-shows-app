import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Show = ({ id, name, image: { medium } }) => {
  const { myShows, setMyShows, currentPage } = useGlobalContext();

  const handleAddShow = () => {
    const show = { id, name, image: { medium } };

    if (!myShows.some((e) => e.id === id)) {
      setMyShows([...myShows, show]);
    }
  };

  const handleRemoveShow = () => {
    const currentid = id;
    setMyShows(
      myShows.filter((item) => {
        return item.id !== currentid;
      })
    );
  };

  return (
    <article className="show-container">
      <h3>
        {name.length < 18
          ? name
          : name.slice(0, 18).replace(/^\s+|\s+$/g, "") + "..."}
      </h3>
      <div className="img-container">
        <img src={medium} alt={name} className="img" />
      </div>
      <div className="show-about">
        <Link to={`/show/${id}`} className="btn btn-primary">
          about
        </Link>
        <button
          className={
            currentPage === "home"
              ? "btn btn-success btn-add-remove"
              : "btn btn-danger btn-add-remove"
          }
          onClick={currentPage === "home" ? handleAddShow : handleRemoveShow}
        >
          <i
            className={
              currentPage === "home"
                ? "fas fa-plus-circle"
                : "fas fa-minus-circle"
            }
          ></i>
        </button>
      </div>
    </article>
  );
};

export default Show;
