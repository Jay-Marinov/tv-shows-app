import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchShow = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name">search for TV shows</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchShow}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
