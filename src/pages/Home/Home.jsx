import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Article1 from "../../components/Article1/Article1";
import Article2 from "../../components/Article2/Article2";
import Article3 from "../../components/Article3/Article3";
import Article4 from "../../components/Article4/Article4";

const Home = () => {
  return (
    <div className="HOME">
      <Navbar />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Footer />
    </div>
  );
};

export default Home;
