import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="m-auto bg-slate-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
