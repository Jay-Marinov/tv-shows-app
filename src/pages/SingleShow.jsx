import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";
const url = "https://api.tvmaze.com/shows/";

const SingleShow = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState({
    name: "",
    language: "",
    image: { original: "" },
    link: "",
    premiered: 0,
    genres: [],
    summary: "",
  });

  const { currentPage } = useGlobalContext();

  const getShow = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data) {
        const { name, language, image, url, premiered, genres, summary } = data;
        const newShow = {
          name,
          language,
          image,
          link: url,
          premiered,
          genres,
          summary,
        };
        setShow(newShow);
      }
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getShow();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!show) {
    return <h2 className="section-title">no show to display</h2>;
  }

  const { name, language, premiered, link, genres, summary } = show;
  const image = show.image.original;

  return (
    <section className="section show-section">
      <div className="single-show">
        <div className="row close-show">
          <Link
            to={currentPage === "home" ? "/" : "/myshows"}
            className="btn btn-danger btn-back"
          >
            <i className="fas fa-times-circle"></i>
          </Link>
        </div>
        <div className="row singleShow-row">
          <div className="col img-col">
            <img src={image} alt="" />
          </div>
          <article className="col">
            <h4>
              <span>Name: </span>
              {name ? name : "No info"}
            </h4>
            <div className="genres">
              {genres.length ? (
                genres.map((item, index) => (
                  <div key={index} className="genre bg-success">
                    <span>{item}</span>
                  </div>
                ))
              ) : (
                <span className="genre bg-success">No genres info</span>
              )}
            </div>
            <div style={{ clear: "left", marginBottom: "2rem" }}></div>
            <p>
              <span>Language: </span>
              {language ? language : "No info"}
            </p>
            <p>
              <span>Premiered: </span>
              {!premiered ? "No info" : premiered}
            </p>
            <p>
              <span>Summary: </span>
              {summary ? summary.replace(/<[^>]*>?/gm, "") : "No info"}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              check on tvmaze
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SingleShow;
