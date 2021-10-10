import React from "react";
import SearchForm from "../components/SearchForm";
import ShowsList from "../components/ShowsList";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <ShowsList />
    </main>
  );
};

export default Home;
