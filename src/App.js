import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalogue from "./components/Catalogue.js";
import MainBanner from "./components/MainBanner";
import SearchExercise from "./components/SearchExercise";

const App = () => {
  return (
    <div className="m-auto bg-slate-50 ">
      <main id="home">
        <Navbar />
        <section id="MainBanner">
          <MainBanner />
        </section>
        <section id="SearchExercise">
          <SearchExercise />
        </section>
        <section id="Catalogue">
          <Catalogue />
        </section>
        <section id="Contact">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
