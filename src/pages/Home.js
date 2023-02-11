import React from "react";
import Catalogue from "../components/Catalogue.js";
import MainBanner from "../components/MainBanner";
import SearchExercise from "../components/SearchExercise";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <SearchExercise />
      <Catalogue />
    </div>
  );
};

export default Home;
