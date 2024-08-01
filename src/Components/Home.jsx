import React from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import StaticMovies from "./StaticMovies";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to Adviters Movies!</h1>
      <Link to={`/search-movie`}>
      <button>Search Movies</button>
      </Link>
      <Movies />
      <StaticMovies />
    </>
  );
};

export default Home;
