import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalogue from "./components/Catalogue.js";
import MainBanner from "./components/MainBanner";
import SearchExercise from "./components/SearchExercise";

const App = () => {
  return (
    <div className="m-auto bg-slate-50">
      <Navbar />
      <MainBanner />
      <SearchExercise />
      <Catalogue />
      <Footer />
    </div>
  );
};

export default App;
