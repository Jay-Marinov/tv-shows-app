import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="section error-container">
      <h2 style={{ marginBottom: "2rem" }}>
        No page found <i className="fas fa-sad-tear"></i>
      </h2>
      <Link to={`/`} className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
