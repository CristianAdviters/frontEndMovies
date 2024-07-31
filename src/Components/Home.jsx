import React from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import StaticMovies from "./StaticMovies";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <h1 style={{ textAlign: "center" }}>Welcome to Adviters Movies!</h1>
      <button>Search Movies</button>
      <Movies />
      <StaticMovies />
      <Footer />
    </>
  );
};

export default Home;
