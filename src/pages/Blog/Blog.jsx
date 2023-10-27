import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Article3 from "../../components/Article3/Article3";
import Article5 from "../../components/Article5/Article5";

//For opening this page click on blog button in Navbar
const Blog = () => {
  return (
    <div>
      <Navbar />
      <Article5 />
      <Article3 />
      <Footer />
    </div>
  );
};

export default Blog;
